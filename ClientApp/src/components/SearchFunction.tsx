import useMediaQuery from "../hooks/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToolType } from "../types";
import { useQuery } from "react-query";

const SearchInput = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          isAboveMediumScreens
            ? `flex items-center justify-between gap-2`
            : `flex items-center justify-start gap-2 px-2 pb-8`
        }
      >
        <div>
          <input
            className="border-medium rounded-full bg-slate-50 px-4 py-3"
            type="text"
            placeholder="Find a tool"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="flex items-center">Search</button>
        </div>
      </div>
    </form>
  );
};

const SearchFunction = () => {
  return <SearchInput />;
};
export default SearchFunction;
