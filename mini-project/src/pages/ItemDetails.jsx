import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import recipies from "../assets/recipe.json"
function ItemDetails({recipiesArray}) {
  
  const params=useParams()
  let recipe=recipiesArray.find((item)=>{
    return item.id===params.itemId
  })

  if (!recipe) {
    return <div><h1>Recipe not found</h1></div>
  }

  return (
    <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.calories}</p>
        <img src={recipe.image} style={{width:"100px",height:"100px"}}/>
    </div>
  )
}

export default ItemDetails