import React from "react";
import {userName , city} from '../data/user'

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export default Home