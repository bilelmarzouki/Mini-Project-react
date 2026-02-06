import React from 'react'
import recipes from '../assets/recipe.json'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  // Filter for foods with more than 200 calories
  const highCalorieFoods = recipes.filter((item) => item.calories > 200)

  return (
    <aside>
      <h3>🔥 High Calorie (200+)</h3>
      {highCalorieFoods.map((food) => (
        <div key={food.id} style={{ marginBottom: '20px' }}>
          <Link to={`/itemDetails/${food.id}`}>
            {food.name}
          </Link>
          <p>{food.calories} kcal</p>
        </div>
      ))}
    </aside>
  )
}

export default Sidebar