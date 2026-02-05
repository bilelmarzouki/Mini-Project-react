import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import recipies from "../assets/recipe.json"
function ItemDetails() {
  const [recipess, setRecipiess]= useState(recipies)
  const params=useParams()
  let recipe=recipess.find((item)=>{
    return item.id===params.itemId
  })

  return (
    <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.calories}</p>
        <img src={recipe.image} style={{width:"100px",height:"100px"}}/>
    </div>
  )
}

export default ItemDetails