import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

function Home() {
  const { data: tools = [] } = useQuery<ToolType[]>("tools", async function () {
    const response = await axios.get("/api/tools");
    return response.data;
  });

  return (
    <div className="flex">
      {tools.map((tool) => (
        <ToolTile key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default Home;
