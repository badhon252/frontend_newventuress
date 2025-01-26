import FAQSection from "@/components/faq-accordion";
import { PageHeader } from "@/components/shared/sections/page-header";

const Page = () => {
  return <div>
    <PageHeader
      title="Frequently Asked Questions"
      items={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "FAQ",
          href: "/faqs",
        },
      ]}
    />
    <FAQSection/>
  </div>;
};

export default Page;
