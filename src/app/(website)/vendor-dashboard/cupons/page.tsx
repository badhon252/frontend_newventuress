import React from "react";
import CuponContainer from "./_components/CuponContainer";
import CuponFilter from "./_components/CuponFilter";
import AddButon from "./_components/AddButon";
// import EditeCupon from "./_components/EditeCupon";

const page = () => {
  return (
    <div>
      {/* <EditeCupon/> */}
      <AddButon />
      <CuponFilter />
      <CuponContainer />
    </div>
  );
};

export default page;
