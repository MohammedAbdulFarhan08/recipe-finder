export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full overflow-y-auto max-h-screen p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded mb-4" />

        <p className="mb-2"><strong>Category:</strong> {recipe.strCategory}</p>
        <p className="mb-2"><strong>Area:</strong> {recipe.strArea}</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Instructions</h3>
        <p className="text-sm whitespace-pre-line">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-600 underline"
          >
            🎥 Watch Recipe Video
          </a>
        )}
      </div>
    </div>
  );
}
