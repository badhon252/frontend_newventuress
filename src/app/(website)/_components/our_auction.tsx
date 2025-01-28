// Packages
import dynamic from "next/dynamic";

// Local imports

import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import { featureProducts } from "@/data/featured";
import Image from "next/image";
const BiddingCard = dynamic(() => import("./bid-card"), {
  ssr: false,
});

const OurAuction = () => {
  return (
    <div className="section container">
      <SectionHeading heading="Our Auctions" subheading="Auctions" />

      <div className="grid h-auto grid-cols-1 gap-[17px] pt-[40px] md:grid-cols-2 lg:gap-[27px]">
        <FeaturedCards />

        <div className="space-y-4">
          <BiddingCard />
          <JoinAsSeller />
        </div>
      </div>
    </div>
  );
};

export default OurAuction;

const FeaturedCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {featureProducts.slice(0, 4).map((product) => (
        <FeaturedProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const JoinAsSeller = () => {
  return (
    <div className="h-fit space-y-7 rounded-xl bg-white p-6">
      <div>
        <h2 className="text-gradient mb-2 text-center text-[22px] font-semibold">
          Partner with Us. Grow Your Business on
        </h2>
        <p
          className="text-gradient text-center text-[20px] font-medium"
          // style={{
          //   background: "linear-gradient(90deg, #1D4C1F 0%, #44B249 100%)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          Join Our Marketplace Today
        </p>
        <Image
          className="mx-auto mt-2"
          src="/assets/img/Line.png"
          width={80}
          height={80}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="Picture of the author"
        />
      </div>
      <Button className="s mb-4 w-full py-2">Join As a Sellers</Button>
    </div>
  );
};
