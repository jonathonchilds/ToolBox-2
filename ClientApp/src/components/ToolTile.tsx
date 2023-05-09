import React from "react";
import { ToolType } from "../types";
import { Link } from "react-router-dom";

function ToolTile({ tool }: { tool: ToolType }) {
  const tileButtons = "rounded-lg bg-transparent px-2 m-2 text-black shadow-md";

  return (
    <div className="flex flex-wrap justify-center rounded-2xl ">
      <div className=" h-[250px] w-[250px] overflow-hidden rounded-xl shadow-lg ">
        <Link to={`/${tool.id}`}>
          <img
            className="h-full w-full object-cover transition duration-300 hover:brightness-110"
            src={tool.photoURL}
            alt={tool.name}
          />
        </Link>
      </div>
      <div>
        <h2>
          <Link to={`/${tool.id}`}>
            <p className="pb-2 pt-4 text-center text-lg text-gray-950 hover:cursor-pointer">
              {tool.name}
            </p>
          </Link>
        </h2>
        <div className="flex justify-evenly ">
          {tool.borrow === true ? (
            <button className={`${tileButtons} `}> Borrow </button>
          ) : (
            ""
          )}
          {tool.rent === true ? (
            <button className={tileButtons}> Rent </button>
          ) : (
            ""
          )}
          {tool.purchase === true ? (
            <button className={tileButtons}> Purchase </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ToolTile;
