import { LucideIcon } from "lucide-react";
import React, { JSX } from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) => {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";
    return `${signal}${value.toFixed()}%`;
  };

  const getChangeColor = (value: number) =>
    value >= 0
      ? "text-emerald-600 dark:text-emerald-400"
      : "text-rose-600 dark:text-rose-400";

  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white dark:bg-slate-950 col-span-1 shadow-md rounded-2xl flex flex-col justify-between text-slate-900 dark:text-slate-100 ring-1 ring-slate-200 dark:ring-slate-700/80">
      {/* HEADER */}
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-slate-700 dark:text-slate-200">
            {title}
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {dateRange}
          </span>
        </div>
        <hr className="border-slate-200 dark:border-slate-600" />
      </div>

      {/* BODY */}
      <div className="flex mb-6 items-center justify-around gap-4 px-5">
        <div className="rounded-full p-5 bg-blue-50 dark:bg-blue-900/40 border-sky-300/60 dark:border-blue-700/60 border">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between my-4">
                <span className="text-slate-500 dark:text-slate-400">
                  {detail.title}
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  {detail.amount}
                </span>
                <div className="flex items-center">
                  <detail.IconComponent
                    className={`w-4 h-4 mr-1 ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  />

                  <span
                    className={`font-medium ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  >
                    {formatPercentage(detail.changePercentage)}
                  </span>
                </div>
              </div>
              {index < details.length - 1 && (
                <hr className="border-slate-200 dark:border-slate-600" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCard;