import React from "react";
import SearchBar from "../../Components/SearchBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        />
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
