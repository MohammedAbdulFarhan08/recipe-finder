import { useState } from "react";
import { searchByIngredient, getRecipeById } from "../services/api";
import SearchBar from "../components/SearchBar";
import RecipeModal from "../components/RecipeModal";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (ingredient) => {
    const data = await searchByIngredient(ingredient);
    setRecipes(data.meals || []);
  };

  const handleRecipeClick = async (id) => {
    const data = await getRecipeById(id);
    setSelectedRecipe(data.meals[0]);
  };

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-500 text-white py-16 px-6 text-center rounded-lg shadow-md mb-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Recipes Right for You
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Search by ingredients and explore delicious meals tailored to your
            taste.
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">
          No recipes yet. Try searching for an ingredient above 🍅🥚🍗
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              onClick={() => handleRecipeClick(recipe.idMeal)}
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {recipe.strMeal}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />

      {/* Footer */}
      <footer className="relative mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 text-white py-16 px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Hungry for More Recipes?
          </h3>
          <p className="mb-8 text-md md:text-lg">
            Explore thousands of delicious recipes and find your next favorite
            meal.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-green-300 transition">
              Home
            </a>
            <a href="#" className="hover:text-green-300 transition">
              About
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Contact
            </a>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <img
              src="https://img.icons8.com/emoji/48/ffffff/frying-pan-emoji.png"
              className="animate-bounce-slow"
              alt="frying pan"
            />
            <img
              src="https://img.icons8.com/emoji/48/ffffff/steaming-bowl-emoji.png"
              className="animate-bounce-slow delay-200"
              alt="steaming bowl"
            />
            <img
              src="https://img.icons8.com/emoji/48/ffffff/cooking-emoji.png"
              className="animate-bounce-slow delay-400"
              alt="cooking"
            />
          </div>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Recipe Finder. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
