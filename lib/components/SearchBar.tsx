
import React from "react";

const SearchBar = ({
                       search,
                       setSearch,
                   }: {
    search: string;
    setSearch: (s: string) => void;
}) => {
    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
