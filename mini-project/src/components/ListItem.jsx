import React, { useState } from "react";

import { Link } from "react-router-dom";

const ListItem = ({ recipiesArray, setRecipiesArray, onSelectItem }) => {
  const ClickMeToRemoveItem = (id) => {
    // We filter the array to keep only items that don't match the clicked ID
    const filteredArr = recipiesArray.filter((item) => {
      return item.id !== id;
    });
    setRecipiesArray(filteredArr);
  };
  const ClickMeToUpateItem = (id) => {
    onSelectItem(id);
  };
  return (
    <div>
      {recipiesArray.map((recipe) => (
        <ul key={recipe.id}>
          <li>
            <Link to={`/itemDetails/${recipe.id}`}>
              {recipe.name}
              {recipe.calories > 200 && <span> (High Calorie)</span>}
            </Link>
            <button
              onClick={() => ClickMeToRemoveItem(recipe.id)}
              style={{ marginLeft: "100px" }}
            >
              Click to remove the item
            </button>
            <button
              onClick={() => ClickMeToUpateItem(recipe.id)}
              style={{ marginLeft: "30px" }}
            >
              Click to Update
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListItem;
