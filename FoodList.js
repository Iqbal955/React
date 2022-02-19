import React, { useState, useEffect } from "react";
import axios from "axios";

import Food from "./Food";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function FoodList() {
  const [data, setData] = useState([]);

  {
    console.log(this.state);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div>
      {data.map((FoodData) => {
        return (
          <div>
            <h2>{FoodData.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default FoodList;
