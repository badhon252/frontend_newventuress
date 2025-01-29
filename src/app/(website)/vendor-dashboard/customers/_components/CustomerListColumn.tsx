"use client";

import { Button } from "@/components/ui/button";
import { DemoTableItemsType } from "@/data/CustomerListData";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const CustomerListColumn: ColumnDef<DemoTableItemsType>[] = [
  {
    header: "Customer Profile",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-4">
          <div>
            <Image
              src={row.original.image}
              height={120}
              width={120}
              alt="img"
              className="h-[120px] w-[120px] rounded-full object-cover"
            />
          </div>
          <div className="w-[250px] text-left">
            <h4 className="text-gradient text-[18px] font-semibold">
              {row.original.name}
            </h4>
            <h5 className="text-gradient py-2 text-[16px] font-normal">
              <span className="text-[#3D3D3D]"> {row.original.userEmail}</span>
            </h5>
            <p className="text-wrap text-[16px] font-normal">
              {row.original.userInfo}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    header: "Store",
    cell: ({ row }) => {
      return (
        <div className="text-gradient text-[18px] font-semibold">
          {row.original.store}
        </div>
      );
    },
  },
  {
    header: "Total Orders",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] font-normal text-[#444444]">
            {row.original.totalOder}
          </span>
        </div>
      );
    },
  },
  {
    header: "Money Spent",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] font-normal text-[#444444]">
            ${row.original.moneySpent}
          </span>
        </div>
      );
    },
  },
  {
    header: "Last Order",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] font-normal text-[#444444]">
            {row.original.lestOrder}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="h-auto w-[110px] rounded-lg bg-white shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
            >
              <DropdownMenuItem className="rounded-b-[8px] p-[8px] text-red-600 hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
