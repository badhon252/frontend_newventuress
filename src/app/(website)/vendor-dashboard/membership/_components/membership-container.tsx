"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MediaColumns } from "./membership-column";

const MembershipContainer = () => {
  const [currentPage, setCurrentPage] = useState(1); // Missing import for useState

  return (
    <div>
      <TableContainer data={MemberTableDataItems} columns={MediaColumns} />
      <div className="mt-[40px] flex justify-between">
        <div className="text-[#444444] font-normal text-[16px]">
          Showing 1 to 25 in first entries
        </div>
        <div className="w-[400px]">
          <PacificPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={10}
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipContainer;

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react"; // Missing import
import PacificPagination from "@/components/ui/PacificPagination";
import { MemberTableDataItems, MemberTableDataType } from "@/data/member";

// TableContainer Component
const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<MemberTableDataType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTable table={table} columns={columns} title="Membership List" />
    </>
  );
};
