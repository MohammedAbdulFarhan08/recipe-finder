// Centralized API calls for TheMealDB
const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchByIngredient = async (ingredient) => {
  const res = await fetch(`${API_BASE}/filter.php?i=${ingredient}`);
  return res.json();
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
  return res.json();
};
