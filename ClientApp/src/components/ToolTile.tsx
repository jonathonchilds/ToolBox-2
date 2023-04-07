import React from "react";
import { ToolType } from "../types";
import { formatPrice } from "../utilities/FormatPrice";

function ToolTile({ tool }: { tool: ToolType }) {
  return (
    <div className="w-full flex-wrap p-4 md:w-1/6">
      <div className="h-96 flex-col overflow-hidden rounded-xl shadow-md hover:shadow-xl">
        <div className="h-2/4">
          <img
            className="h-full w-full object-cover hover:cursor-pointer"
            src={tool.imageUrl}
            alt={tool.name}
            width="300"
            height="400"
          />
        </div>

        <div className="h-2/4 space-y-4 bg-slate-800 md:p-4 md:text-left">
          <h2 className="flex justify-center border-b">
            <p className="py-2 text-2xl font-bold text-gray-100 hover:cursor-pointer">
              {tool.name}
            </p>
          </h2>
          <div className="space-y-2 text-xl">
            <div className="max-w-fit px-2 text-white hover:cursor-pointer">
              {tool.borrow === true ? `Borrow me!` : ""}
            </div>
            <div className="max-w-fit px-2 text-white hover:cursor-pointer">
              {tool.rent === true ? `Rent: ${formatPrice(tool.rentPrice)}` : ""}{" "}
            </div>
            <div className="my-0 max-w-fit px-2 text-secondary-500 hover:cursor-pointer">
              {tool.purchase === true
                ? `Purchase: ${formatPrice(tool.purchasePrice)}`
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTile;
