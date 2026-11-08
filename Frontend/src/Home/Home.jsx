import { useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Main_Header">
        <h1>The Prehistoric Creature Database</h1>
        <h2>An encyclopedia on animals from every era of Earth!</h2>
      </div>
    </>
  );
}

export default Home;
