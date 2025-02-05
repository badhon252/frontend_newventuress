"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Box, Settings } from "lucide-react";
import { Bidsmodal } from "./Bidsmodal";

interface AuctionHeaderProps {
  showAddAuction: boolean;
  setShowAddAuction: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuctionHeader: React.FC<AuctionHeaderProps> = ({ showAddAuction, setShowAddAuction }) => {
  const [showBids, setShowBids] = React.useState(false);

 
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
        <span className="font-medium">All</span> (20) |
        <span className="text-gradient"> Published (30) | </span>
        <span className="text-gradient"> Draft (30) | </span>
        <span className="text-gradient"> Pending (30) | </span>
        <span className="text-gradient"> Archived (30) </span>
      </div>
      <div className="flex gap-4">
      <Button onClick={() => setShowBids(true)}> 
           
            Bids Settings <Settings /> 
        </Button>
        <Button onClick={() => setShowAddAuction((prev) => !prev)}>
          {showAddAuction ? "Auction List" : "Add New"} <Box />
        </Button>
      </div>
      <Bidsmodal isOpen={showBids} onClose={() => setShowBids(false)} />
    </div>
  );
};

export default AuctionHeader;
