import React from "react";
import { ToolType } from "../types";

function ToolTile({ tool }: { tool: ToolType }) {
  return (
    <div className="drop-shadow:xl p-4">
      <div className="rounded-lg border-4 border-slate-800 p-8 hover:cursor-pointer hover:border-secondary-500 dark:bg-slate-800 md:flex md:p-0">
        <div className="align-center flex flex-col justify-center p-1">
          <img
            className="m-auto h-20 w-20 rounded md:h-auto md:w-48"
            src={tool.imageUrl}
            alt=""
            width="300"
            height="400"
          />
        </div>
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
          <h2>
            <p className="text-lg font-medium text-secondary-500">
              {tool.name}
            </p>
          </h2>
          <div className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{tool.owner} </div>
            <div className="text-slate-700 dark:text-slate-500">
              {tool.isAvailable}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {tool.price}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {tool.borrow}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {tool.rent}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {tool.purchase}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTile;
