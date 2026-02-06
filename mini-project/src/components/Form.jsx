import React, { useState } from 'react'

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
    const newRecipe={
      id:1,
      name:name,
      image:image,
      calories:calories,
      servings:1
    }
    const submitForm=(event)=>{
       event.preventDefault()
       const clone=[...recipiesArray]
       clone.push(newRecipe)
       setRecipiesArray(clone)
       setName("")
       setImage("")
       setCalories("")
    }
    
  return (
      
     <form onSubmit={submitForm}>
      <label htmlFor="name"></label>
      <input type="text" name="name" value={name} onChange={changeName}/>

      <label htmlFor="calories"></label>
      <input type="text" name="calories" value={image} onChange={changeImage}/> 
      <label htmlFor="image"></label>
      <input type="url" name="image" value={calories} onChange={changeCalories}/>

      <label htmlFor="servings"></label>
      <input type="number" name="servings" value={1}/>
      
      <button type="submit">Add</button>
    </form>
 
  )
}

export default Form