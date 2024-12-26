// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const FeaturedRecipes = () => {
//     const navigate = useNavigate();

//     const recipes = [
//         {
//             id: 1,
//             title: "Spaghetti Carbonara",
//             ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, pepper",
//             image: "https://i.ibb.co.com/z20HW7F/carbonara.jpg",
//         },
//         {
//             id: 2,
//             title: "Classic Caesar Salad",
//             ingredients: "Romaine lettuce, croutons, Caesar dressing, Parmesan",
//             image: "https://i.ibb.co.com/GCMYTFr/side-view-caesar-salad-with-chicken-parmesan-cheese-white-bowl-wooden-board.jpg",
//         },
//         {
//             id: 3,
//             title: "Chicken Tacos",
//             ingredients: "Tortillas, grilled chicken, salsa, lettuce, cheese",
//             image: "https://i.ibb.co.com/LnrW7MG/pita-bread-sandwiches-with-grilled-chicken-meat-avocado-tomato-cucumber-lettuce-served-wooden-table.jpg",
//         },
//     ];

//     return (
//         <section className="featured-recipes-section py-10">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {recipes.map((recipe) => (
//                         <div
//                             key={recipe.id}
//                             className="recipe-card bg-white shadow-lg rounded-lg overflow-hidden"
//                         >
//                             <img
//                                 src={recipe.image}
//                                 alt={recipe.title}
//                                 className="h-48 w-full object-cover"
//                             />
//                             <div className="p-4">
//                                 <h3 className="text-xl font-bold">{recipe.title}</h3>
//                                 <p className="text-gray-600 mt-2">{recipe.ingredients}</p>
//                                 <button
//                                     onClick={() => navigate(`/recipe/${recipe.id}`)}
//                                     className="btn btn-warning mt-4 w-full"
//                                 >
//                                     View Recipe
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturedRecipes;
