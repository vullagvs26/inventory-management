"use client";

import React from "react";
import { useGetDashboardMetricsQuery } from "@/app/state/api";
import { ShoppingBag } from "lucide-react";
import Rating from "@/app/components/Rating";

const CardPopularProducts = () => {
  const {
    data: dashboardMetrics,
    isLoading,
    isError,
  } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white dark:bg-slate-950 shadow-md rounded-2xl pb-16 text-slate-900 dark:text-slate-100 ring-1 ring-slate-200 dark:ring-slate-700/80">
      {isLoading ? (
        <div className="m-5"></div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr className="border-slate-200 dark:border-slate-600" />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center gap-3">
                  <div>img</div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-slate-700 dark:text-slate-200">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                     <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>
                <div className="text-sm flex items-center">
                    <button className="p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 mr-2">
                        <ShoppingBag size={14} />
                    </button>
                    {Math.round(product.stockQuantity / 1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
