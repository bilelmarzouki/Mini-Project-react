import React, { useState } from 'react'
import ListItem from '../components/ListItem'

import Form from '../components/Form';
import UpdateForm from '../components/updateForm';
function Dashboard({recipiesArray, setRecipiesArray}) {
  const [selectedItemId, setSelectedItemId] = useState(null)
  
  return (
    <div>
        <Form recipiesArray={recipiesArray} setRecipiesArray={setRecipiesArray} />
        <br />
         <UpdateForm selectedItemId={selectedItemId} setRecipiesArray={setRecipiesArray}  setSelectedItemId={setSelectedItemId} />
        <ListItem recipiesArray= {recipiesArray} setRecipiesArray={setRecipiesArray} onSelectItem={setSelectedItemId} />
    </div>
  )
}


export default Dashboard