import React from "react";
import { ToolType } from "../types";
import { formatPrice } from "../utilities/FormatPrice";
import { Link } from "react-router-dom";
import { button } from "../styling/tailwindClasses";

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

{
  /* <section>
              <div className="flex items-center justify-between md:p-4 "></div>
              {tool.borrow === true ? (
                <Button label="Borrow" color="blue-500" hoverColor="blue-700" />
              ) : (
                ""
              )}

              <div className="max-w-fit px-2">
                {tool.rent === true ? (
                  <Button
                    label={`Rent`}
                    color="blue-500"
                    hoverColor="blue-700"
                  />
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
            </section> */
}
