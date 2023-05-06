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
    <div className="flex flex-wrap justify-center bg-white p-4 md:justify-between">
      {tools.map((tool) => (
        <ToolTile key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default Home;
