import useMediaQuery from '../hooks/useMediaQuery';
import React, { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search action with the query value
  };
  const isAboveMediumScreens = useMediaQuery("(min-width: 1425px)");

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
            className="rounded-full px-4 py-3"
            type="text"
            placeholder="Find a tool"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
    </form>
  );
};

const SearchFunction = () => {
  return <SearchInput />;
};
export default SearchFunction;
