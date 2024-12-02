import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recipes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Manage Recipes:</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            {recipe.title} by {recipe.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;