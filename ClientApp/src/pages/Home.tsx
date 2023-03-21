import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

export function Home() {
  // const [filterText, setFilterText] = useState("");

  // const { data: tools = [] } = useQuery<ToolType[]>(
  //   ["tools", filterText],
  //   async function () {
  //     let url = "api/Tools";

  //     if (filterText.length !== 0) {
  //       url = `api/Tools?filter=${filterText}`;
  //     }
  //     const response = await fetch(url);

  //     return response.json();
  //   }
  // );
  const { data: tools = [] } = useQuery<ToolType[]>("tools", async function () {
    const response = await axios.get("/api/tools");
    return response.data;
  });

  return (
    <div className="flex flex-wrap ">
      {/* <form>
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </form> */}
      <div className="flex">
        {tools.map((tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Home;
