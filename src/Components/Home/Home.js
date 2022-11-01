import React from "react";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";

function Home() {
    return (
        <div className="App">
          <Navbar />
          <ItemList />
        </div>
    );
}

export default Home