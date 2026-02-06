import React, { useState } from 'react'
import recipies from '../assets/recipe.json'
import { Link } from 'react-router-dom'

const ListItem = () => {
  const [recipiesArray, setRecipiesArray] = useState(recipies)

  const ClickMeToRemoveItem = (id) => {
    // We filter the array to keep only items that don't match the clicked ID
    const filteredArr = recipiesArray.filter((item) => {
      return item.id !== id
    })
    setRecipiesArray(filteredArr)
  }

  return (
    <div>
      {recipiesArray.map((recipe) => (
        <ul key={recipe.id}>
          <li>
            <Link to={`/itemDetails/${recipe.id}`}>
              {recipe.name} 
              {recipe.calories > 200 && <span> (High Calorie)</span>}
            </Link>
            <button onClick={() => ClickMeToRemoveItem(recipe.id)}>
              Click to remove the item
            </button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ListItem