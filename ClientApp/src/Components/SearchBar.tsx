import React, { useEffect, useState } from "react";

const [notices, setNotices] = useState();
const [search, setSearch] = useState<string | null>(null);
const [loading, setLoading] = useState();

// When search changes, fetch new data (use the hook)
useEffect(() => {
  async function fetchData() {}
}, [search]);

const SearchBar = () => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
