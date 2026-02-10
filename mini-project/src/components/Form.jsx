import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function Form({recipiesArray ,setRecipiesArray}) {
    const [name, setName]=useState("")
    const [image, setImage]=useState("")
    const [calories, setCalories]=useState(0)
   
    const changeName=(event)=>{
        setName(event.target.value)
    }
    const changeImage=(event)=>{
        setImage(event.target.value)
    }
    const changeCalories=(event)=>{
        setCalories(event.target.value)
    }
    const submitForm=(event)=>{
       event.preventDefault()
       const newRecipe={
         id: uuidv4(),
         name:name,
         image:image,
         calories:calories,
         servings:1
       }
       const clone=[...recipiesArray]
       clone.push(newRecipe)
       setRecipiesArray(clone)
       //setName("")
      // setImage("")
       //setCalories("")
    }
    
  return (
      
     <form onSubmit={submitForm}>
      <label htmlFor="name">name:</label>
      <input type="text" name="name" value={name} onChange={changeName}/>

      <label htmlFor="calories">calories:</label>
      <input type="text" name="calories" value={calories} onChange={changeCalories}/> 
      <label htmlFor="image">image:</label>
      <input type="url" name="image" value={image} onChange={changeImage}/>

      <label htmlFor="servings">servings</label>
      <input type="number" name="servings" value={1} readOnly/>
      
      <button type="submit">Add</button>
    </form>
 
  )
}

export default Form