import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:5000/recipes');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/recipes/${id}`);
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };

  return (
    <div>
      <h1>Welcome to the Recipe Sharing Platform!</h1>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;