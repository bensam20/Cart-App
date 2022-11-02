import React, { useEffect, useState } from "react";
// import { useReducer } from "react";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";


function Home() {

  return (
    <div className="App">
      <Navbar />
      <ItemList />
    </div>
  );
}

export default Home;