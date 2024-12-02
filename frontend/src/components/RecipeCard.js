import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
      <p>Author: {recipe.author}</p>
      <button onClick={() => onDelete(recipe._id)}>Delete</button>
    </div>
  );
};

export default RecipeCard;