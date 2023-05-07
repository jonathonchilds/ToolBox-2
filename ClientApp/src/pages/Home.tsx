import React, { useState } from "react";
import { useQuery } from "react-query";

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
    <div className="m-6 bg-white">
      <div className="mb-10">Navbar</div>
      <div className="h-full w-full gap-x-4 gap-y-14  bg-white md:grid md:grid-cols-6">
        {tools.map((tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Home;
