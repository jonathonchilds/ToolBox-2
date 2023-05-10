import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToolTile from "../components/ToolTile";
import { ToolType } from "../types";

interface ToolTileProps {
  addToCart: (tool: ToolType) => void;
}

function Search({ addToCart }: ToolTileProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [tools, setTools] = useState<ToolType[]>([]);

  const loadResults = async function () {
    const response = await fetch(`api/Tools?filter=${query}`);
    const json = await response.json();
    setTools(json);
  };

  useEffect(() => {
    loadResults();
  });

  return (
    <div className="flex flex-wrap  p-4">
      {tools.map((tool) => (
        <ToolTile key={tool.id} tool={tool} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Search;
