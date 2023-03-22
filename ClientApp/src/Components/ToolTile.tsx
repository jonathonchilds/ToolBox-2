import React from "react";
import { ToolType } from "../types";

function ToolTile({ tool }: { tool: ToolType }) {
  return (
    <div className="w-full flex-wrap p-4 md:w-1/5">
      <div className="h-96 flex-col overflow-hidden rounded-xl shadow-md hover:cursor-pointer hover:shadow-xl">
        <div className="h-2/4">
          <img
            className="h-full w-full object-cover"
            src={tool.imageUrl}
            alt={tool.name}
            width="300"
            height="400"
          />
        </div>

        <div className="h-2/4 space-y-4 bg-slate-800 md:p-4 md:text-left">
          <h2 className="flex justify-center">
            <p className="text-2xl font-bold text-gray-100">{tool.name}</p>
          </h2>
          <div className="space-y-2 text-xl">
            <div className="text-secondary-500">
              {tool.borrow === true ? `Borrow` : ""}
            </div>
            <div className="text-white">{tool.rent === true ? "Rent" : ""}</div>
            <div className="text-secondary-500">
              {tool.purchase === true ? `Purchase (${tool.price})` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTile;
