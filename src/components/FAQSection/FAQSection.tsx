import Image from "next/image";
import FaqContainer from "./FaqContainer";

function FAQSection() {
  return (
    <section className="container h-auto relative py-[80px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[28px]">
        {/* Left Image Section */}
        <div className="w-[470px] h-[600px] hidden md:block">
          <Image
            src="/assets/img/faq-Image.png"
            width={470}
            height={600}
            alt="Decorative background"
            className="rounded-lg object-cover w-[470px] h-auto"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-3/5">
          <div className="text-center lg:text-left">
            <h1 className="text-[25px] lg:text-[32px] font-bold text-gradient py-2">
              What do you want to know?
            </h1>
            <p className="text-[16px] lg:text-[20px] text-[#444444] leading-6 mb-10">
              Connect with Trusted Sellers, Explore Quality Products, and
              Elevate Your Experience.
            </p>
          </div>

          {/* Accordion Section */}
          <FaqContainer />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
