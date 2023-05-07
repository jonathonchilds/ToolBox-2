import React, { useState } from "react";
import { useQuery } from "react-query";
import UnderConstruction from "../images/UnderConstruction.png";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

export function Home() {
  const [filterText, setFilterText] = useState("");

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
      <div className=" mb-10 flex justify-center border-b border-slate-600 p-3">
        <img
          alt="Under Construction"
          src={UnderConstruction}
          className="h-[50px] w-[140px]"
        />
      </div>
      <div className="flex h-full w-full grid-cols-4 flex-wrap gap-x-4 gap-y-14 bg-white sm:grid sm:grid-cols-2 lg:grid xl:grid xl:grid-cols-5 2xl:grid 2xl:grid-cols-6">
        {tools.map((tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Home;
