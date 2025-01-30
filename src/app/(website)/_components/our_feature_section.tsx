"use client";

// local import
import { fadeIn } from "@/components/animations/variant";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`,
  );
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
};

const OurFeatureSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  //? // Fetch products
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const products = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <motion.div ref={ref} className="section container py-[80px]">
      <SectionHeading heading="Our Featured Products" subheading="Products" />

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Start animation only when in view
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 gap-[17px] pt-[40px] md:grid-cols-3 md:gap-[27px] lg:grid-cols-4"
      >
        {products.map((product: any) => (
          <FeaturedProductCard key={product._id} product={product} />
        ))}
      </motion.div>

      <div className="mt-[40px] flex w-full items-center justify-center">
        <ButtonArrow text="Explore More" size="sm" href="/products" />
      </div>
    </motion.div>
  );
};

export default OurFeatureSection;
