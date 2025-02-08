

const MediaHeader = () => {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px] ">
        <span className="font-medium text-[#444444]  ">All (20)|</span> 
        <span className="text-gradient  "> Published (30) | </span>
        <span className="text-gradient   "> Draft (30) | </span>
        <span className="text-gradient   "> Pending (30) | </span>
        <span className="text-gradient   "> Archived (30) </span>
      </div>
     
    </div>
  );
};

export default MediaHeader;
