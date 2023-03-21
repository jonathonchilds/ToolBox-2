import React, { useEffect, useState } from "react";
import ToolTile from "./ToolTile";

const SearchBar = () => {
  const [tools, setTools] = useState();
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // When search changes, fetch new data (use the hook)
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(`/api/tools?name=${search}`).then((res) =>
        res.json()
      );
      setTools(data.tools);
      setLoading(false);
    }
  }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {JSON.stringify(tools)}

      {/* <div className="flex flex-wrap ">
        {tools.map((tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div> */}
    </div>
  );
};

export default SearchBar;
