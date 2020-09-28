import React from "react";

export default function Recipe({ data }) {
  const { label, image, ingredientLines } = data.recipe;
  return (
    <>
      <div className="recipe_container">
        <h2>{label}</h2>
        <img src={image} alt="" />
        <div className="ingredients">
          <ul>
            {ingredientLines.map((i, indx) => {
              return <li key={indx}>{i}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
