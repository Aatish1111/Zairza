import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-search">
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search For Any Blogs"
        />
      </div>
      <button className="search_btn">Search</button>
    </div>
  );
};

export default Navbar;
