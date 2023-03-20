import React from "react";
import { ToolType } from "../types";

function ToolTile({ tool }: { tool: ToolType }) {
  return (
    <div className="drop-shadow:xl h-auto w-1/5 max-w-md flex-wrap p-4 md:max-w-2xl ">
      <div className="flex h-96 rounded-xl border-4 border-slate-800 p-8 hover:cursor-pointer hover:border-secondary-500 dark:bg-slate-800">
        <div className="align-center flex flex-col justify-center p-1">
          <img
            className="m-auto h-auto w-auto rounded "
            src={tool.imageUrl}
            alt=""
            width="300"
            height="400"
          />
        </div>
        <div className="space-y-4 md:p-6 md:text-left">
          <h2>
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
