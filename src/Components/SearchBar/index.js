import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <img
        className="search-icon"
        src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
      />
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <img
        className="mic-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png"
      />
    </div>
  );
};

export default SearchBar;
