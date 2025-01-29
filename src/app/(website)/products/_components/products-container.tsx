"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import SidebarFilters from "./SidebarFilters";
import ProductsSort from "./products-sort";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`,
  );
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
};

const ProductsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [products, setProducts] = useState([]);

  //? // Fetch products
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const products = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //? // Get filters from Redux store
  // const { priceRange, flowers, categories } = useAppSelector(
  //   (state: RootState) => state.filters
  // );

  //? // Filter products based on the selected filters
  // const filteredProducts = featureProducts.filter((product) => {
  //   const price = parseFloat(product.price.replace(",", ""));
  //   const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
  //   const matchesCategory =
  //     categories.length === 0 || categories.includes(product.category);
  //   const matchesFlowerType =
  //     flowers.length === 0 || flowers.includes(product.flowerType);

  //   return matchesPrice && matchesCategory && matchesFlowerType;
  // });

  return (
    <div className="section container lg:mb-[150px]">
      <SectionHeading heading="Products" subheading="" />

      {/* product sort  */}
      <div className="container mt-[40px] flex h-[50px] items-center justify-end rounded-[8px] bg-[#F9FAFD] p-[8px] shadow-[0px_4px_4px_0px_#00000026]">
        <div>
          <ProductsSort />
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <SidebarFilters />
        </div>

        {/* Products Grid */}
        <div className="mt-[52px] grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((item: any) => (
            <FeaturedProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-[40px]">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={Math.ceil(products.length / 9)} // Assuming 9 items per page
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
