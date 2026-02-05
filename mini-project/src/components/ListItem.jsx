import React, { useState } from 'react'
import recipies from "../assets/recipe.json"
import { Link } from 'react-router-dom'
const ListItem = () => {
    const [recipiesArray, setRecipiesArray]=useState(recipies)
    const ClickMeToRemoveItem =(id)=>{
        const fiteredArr= recipiesArray.filter((item)=>{
           return item.id!==id
        })
        setRecipiesArray(fiteredArr)
    }
  return (
    <div>
       {recipiesArray.map((recipe)=>(
        <>
          <ul>
            {recipe.calories >200 &&<li>{recipe.name}</li>}
          </ul>
          
        </>
       ))}  {recipiesArray.map((recipe)=>(
        <>
          <ul>
            <Link to={`/itemDetails/${recipe.id}`}>{<li>{recipe.name}</li>}</Link>
            <button onClick={()=>ClickMeToRemoveItem(recipe.id)}>Click to remove the item</button>
          </ul>
          
        </>
       ))}
    </div>
  )
}

export default ListItem