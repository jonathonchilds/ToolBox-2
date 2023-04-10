import React from "react";
import { ToolType } from "../types";
import { formatPrice } from "../utilities/FormatPrice";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";

function ToolTile({ tool }: { tool: ToolType }) {
  return (
    <div className="w-full flex-wrap p-4 md:w-1/5">
      <div className="h-80 w-80 flex-col overflow-hidden rounded shadow-md hover:shadow-xl">
        <div className="h-3/4">
          <Link to={`/${tool.id}`}>
            <img
              className="h-full w-full object-cover hover:cursor-pointer"
              src={tool.imageUrl}
              alt={tool.name}
              width="271"
              height="257"
            />
          </Link>
        </div>

        <div className="h-full w-full bg-slate-100">
          <div className="flex h-1/4 items-center justify-between md:p-4 ">
            <h2>
              <Link to={`/${tool.id}`}>
                <p className=" text-gray-950 hover:cursor-pointer">
                  {tool.name}
                </p>
              </Link>
            </h2>
            <div className="flex items-center justify-between md:p-4 "></div>
            {tool.borrow === true ? (
              <Button label="Borrow" color="blue-500" hoverColor="blue-700" />
            ) : (
              ""
            )}

            <div className="max-w-fit px-2">
              {tool.rent === true ? (
                <Button label={`Rent`} color="blue-500" hoverColor="blue-700" />
              ) : (
                ""
              )}
            </div>
            <div className="my-0 max-w-fit px-2 ">
              {tool.purchase === true ? (
                <Button
                  label={`Purchase`}
                  color="blue-500"
                  hoverColor="blue-700"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTile;
