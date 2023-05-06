import React from "react";
import { ToolType } from "../types";
import { formatPrice } from "../utilities/FormatPrice";
import { Link } from "react-router-dom";
import { button } from "../styling/tailwindClasses";

function ToolTile({ tool }: { tool: ToolType }) {
  const tileButtons =
    "rounded-lg bg-transparent px-2 py-1 text-black shadow-md";

  return (
    <div className=" m-4 overflow-auto rounded-xl border shadow-sm md:w-[250px]">
      <Link to={`/${tool.id}`}>
        <img
          className="pt-2 hover:cursor-pointer"
          src={tool.photoURL}
          alt={tool.name}
          width="271"
          height="257"
        />
      </Link>
      <h2>
        <Link to={`/${tool.id}`}>
          <p className="p-4 pb-2 text-center text-lg text-gray-950 hover:cursor-pointer">
            {tool.name}
          </p>
        </Link>
      </h2>
      <div className="flex justify-evenly p-4 pt-2">
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
