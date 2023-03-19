import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

function Home({ SearchInput }: { SearchInput: string }) {
  const { data: tools = [] } = useQuery<ToolType[]>(
    ["tools", SearchInput],
    async function () {
      const response =
        SearchInput.length === 0
          ? await axios.get("/api/tools")
          : await axios.get(`/api/tools?name=${SearchInput}`);
      return response.data;
    }
  );

  console.log(tools);

  return (
    <div className="flex flex-wrap">
      {tools.map((tool) => (
        <ToolTile key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default Home;
