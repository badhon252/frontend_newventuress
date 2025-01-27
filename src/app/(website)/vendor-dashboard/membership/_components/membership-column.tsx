"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberTableDataType } from "@/data/member";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { TableCell } from "@/components/ui/table";

export const MediaColumns: ColumnDef<MemberTableDataType>[] = [
  {
    accessorKey: "Plan",
    header: "Plan",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <span className="text-[12px] font-medium leading-[14.4px] text-[#F9FAFD] py-[10px] px-[33px] bg-primary rounded-[12px] text-center">
            {row.original["Plan"]}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Pay Method",
    header: "Pay Method",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-base text-[#444444] font-normal leading-[19.2px]">
            {row.original["Pay Method"]}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "Store",
    header: "Store",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-[18px] font-bold text-gradient">
            {row.original.Store}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "Time",
    header: "Time",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-base font-normal text-[#444444]">
            {row.original["Time"]}
          </p>
        </div>
      );
    },
  },
  {
    id: "actions", // Unique ID for the actions column
    header: "Actions",
    cell: ({ row }) => {
      const handleDelete = () => {
        console.log("Delete clicked for row:", row.original);
        // Add logic to confirm and delete the row
      };

      return (
        <TableCell className="text-right h-[154px] flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-8 p-0">
              <span className="sr-only">Open menu</span>
              <div className="">

              <MoreHorizontal className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleDelete} className="text-red-500">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      );
    },
    enableSorting: false,
    size: 100,
  },
];
