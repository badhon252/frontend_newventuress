"use client";

import {
  ColumnDef,
  flexRender,
  Table as ReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]; // Columns for the table
  table: ReactTable<TData>; // Correctly typed table instance
  title?: string;
  titleClass?: string;
}

export function DataTable<TData, TValue>({
  columns,
  table,
  title = "Data Table",
  titleClass,
}: DataTableProps<TData, TValue>) {
  return (
    <div className="rounded-md border py-[32px] bg-white">
      <div
        className={cn(
          titleClass,
          "bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] py-[22px] pl-[32px] text-[28px] font-semibold leading-[33px] rounded-t-[24px] text-white mx-[32px]"
        )}
      >
        {title}
      </div>
      <Table>
        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              style={{
                boxShadow: "none",
              }}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-base font-medium leading-[19px] text-[#444444] text-center px-[20px]" >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >

                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
