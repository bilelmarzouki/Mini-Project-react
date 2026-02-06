import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import recipies from "../assets/recipe.json";
import Form from '../components/Form';
function Dashboard() {
  const [recipiesArray, setRecipiesArray] = useState(recipies);
  return (
    <div>
        <Form recipiesArray={recipiesArray} setRecipiesArray={setRecipiesArray} />
        <ListItem recipiesArray= {recipiesArray} />
    </div>
  )
}


export default Dashboard