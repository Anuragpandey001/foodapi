import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { fetchData } from "../Service";

export default function Reciepe(props) {
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("pizza");

  const [data, setData] = useState("");

  const searchRecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
      props.setLoader(false);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="heading-line">
          <strong>Search Recipes</strong>
          <div className="input-wrapper">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search"
            />
            <button
              onClick={() => (searchRecipe(search), props.setLoader(true))}
            >
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="flexbox">
          {data &&
            data.hits.map((item, index) => {
              return (
                <>
                  <div className="flexItem" key={index}>
                    <div className="img-wrapper">
                      <img src={item.recipe.image} alt={item.recipe.label} />
                    </div>
                    <p>{item.recipe.label}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
