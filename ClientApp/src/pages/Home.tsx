import axios from "axios";
import React from "react";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

async function Home({ SearchInput }: { SearchInput: string }) {
  const fetchTools = async () => {
    if (SearchInput === "") {
      try {
        const response = await axios.get<ToolType[]>("/api/tools");
        const tools = response.data;
        return tools;
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get<ToolType[]>(
          `/api/tools?name=${SearchInput}`
        );
        const tools = response.data;
        return tools;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const tools = await fetchTools();

  return (
    <div className="flex flex-wrap ">
      {tools?.map((tool) => (
        <ToolTile key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default Home;
