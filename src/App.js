import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

export default function App() {
  const API_KEY = "28be9db00758af5a20a6e50c0937314f";
  const APP_ID = "f36daa62";
  //api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

  //String api data
  const [apidata, setApidata] = useState([]);
  //Onchange
  const [inputvalue, setInputvalue] = useState("");
  //userquery
  const [query, setQuery] = useState("apple");

  //Collecting data from api with async
  const getData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setApidata(data.hits);
  };

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputvalue);
    setInputvalue("");
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search recipee.."
          onChange={(e) => setInputvalue(e.target.value)}
          value={inputvalue}
        />
        <input disabled={!inputvalue} type="submit" value="Search" />
      </form>
      <div className="all_recipes">
        {apidata.map((data, indx) => {
          return <Recipe key={indx} data={data} />;
        })}
      </div>
    </div>
  );
}
