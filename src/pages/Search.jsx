import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/imageSlider/ImageSlider";
import SearchNavbar from "../components/SearchNavbar/SearchNavbar";
import Body from "../components/SearchBody/Body";
const Search = () => {
  return (
    <>
      
      <Navbar />
      <SearchNavbar />
      <Body />
      <ImageSlider />
    </>
  );
};

export default Search;
