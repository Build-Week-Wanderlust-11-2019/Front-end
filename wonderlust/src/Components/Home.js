import React from "react";
import { Route } from "react-router-dom";
import Navigation from './Navigation'



function Home(props) {
  console.log(props);
  return (
      <>
      <Navigation />
      <p>Landing,route</p>
      </>
  )
}

export default Home;
