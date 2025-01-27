import MediaFilter from "./_components/membership-filter";
import MediaHeader from "./_components/membership-header";
import VendorMediaContainer from "./_components/membership-container";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <MediaHeader />
      <MediaFilter />
      <VendorMediaContainer />
    </div>
  );
};

export default Page;
