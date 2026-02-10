import React, { useState } from 'react'

function UpdateForm({ selectedItemId, setRecipiesArray, setSelectedItemId }) {
    
    const [name, setName]=useState("")
    const [image, setImage]=useState("")
    const [calories, setCalories]=useState(0)
   
    const submitForm=(event)=>{
       event.preventDefault()
       
       if (selectedItemId === null) {
         alert('Please select an item to update first')
         return
       }
       
       setRecipiesArray(prev => prev.map(recipe => 
         recipe.id === selectedItemId 
           ? { ...recipe, name: name || recipe.name, calories: Number(calories) || recipe.calories, image: image || recipe.image }
           : recipe
       ))
       
       // Clear form and selection
       setName("")
       setImage("")
       setCalories(0)
       setSelectedItemId(null)
    }
    
  return (
      
     <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>

      <label htmlFor="calories">Calories</label>
      <input type="number" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Enter calories"/> 
      <label htmlFor="image">Image URL</label>
      <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL"/>

      <button type="submit">{selectedItemId ? 'Update Item' : 'Select an item first'}</button>
    </form>
 
  )
}

export default UpdateForm