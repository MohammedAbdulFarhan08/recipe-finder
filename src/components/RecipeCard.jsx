export default function RecipeCard({ recipe, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(recipe.idMeal)}
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
      </div>
    </div>
  );
}
