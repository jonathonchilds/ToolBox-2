import React, { useState } from "react";
import { useQuery } from "react-query";
import UnderConstruction from "../images/UnderConstruction.png";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";

interface ToolTileProps {
  addToCart: (tool: ToolType) => void;
}

export function Home({ addToCart }: ToolTileProps) {
  const [filterText, setFilterText] = useState("");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");
  const { data: tools = [] } = useQuery<ToolType[]>(
    ["tools", filterText],
    async function () {
      let url = "api/Tools";
      if (filterText.length !== 0) {
        url = `api/Tools?filter=${filterText}`;
      }
      const response = await fetch(url);
      return response.json();
    }
  );

  return (
    <div>
      {isAboveMediumScreens ? (
        <div className=" mb-10 flex flex-row justify-between border-b border-slate-300 p-2 shadow">
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/husky-logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Ridgid-Tools.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/DeWalt-Logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/milwakue-logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/RyobiLogoA.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Makita-power-tools-logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/stanley-logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Porter-Cable.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/1Bosch-appliances-logo.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Delta-Tools.png"
            className=" h-[70px]"
          ></img>
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/hilti.png"
            className=" h-[70px]"
          ></img>
        </div>
      ) : (
        <div className=" mb-10 flex flex-row justify-center border-b border-slate-300 shadow">
          <div className="flex items-center ">Mobile Navbar</div>
          <img src={UnderConstruction} className="m-4 h-[50px]"></img>
        </div>
      )}
      <div className="flex h-full w-full grid-cols-4 flex-wrap gap-x-4 gap-y-14 bg-white sm:grid sm:grid-cols-2 lg:grid xl:grid xl:grid-cols-5 2xl:grid 2xl:grid-cols-6">
        {tools.map((tool) => (
          <ToolTile key={tool.id} tool={tool} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
