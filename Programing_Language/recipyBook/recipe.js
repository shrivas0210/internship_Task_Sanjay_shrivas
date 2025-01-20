// Sample array of recipe objects
const recipes = [
    {
        label: "poha",
        //image: "https://via.placeholder.com/150",
        ingredientLines: ["poha", "tel", "masale", "Onions"],
        //url: "https://example.com/chicken-curry"
    },
    {
        label: "Vegetable Stir Fry",
        //image: "https://via.placeholder.com/150",
        ingredientLines: ["Broccoli", "Carrots", "Soy sauce", "Garlic"],
        //url: "https://example.com/vegetable-stir-fry"
    },
    {
        label: "Beef Tacos",
       // image: "https://via.placeholder.com/150",
        ingredientLines: ["Ground beef", "Taco seasoning", "Tortillas", "Cheese"],
       // url: "https://example.com/beef-tacos"
    },
    {
        label: "Pasta Primavera",
        //image: "https://via.placeholder.com/150",
        ingredientLines: ["Pasta", "Bell peppers", "Parmesan cheese", "Olive oil"],
        //url: "https://example.com/pasta-primavera"
    }
];

// Select elements
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#search');
const resultList = document.querySelector('#result');

// Event listener for form submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipe();
});

// Function to search and display recipes
function searchRecipe() {
    const searchValue = searchInput.value.trim().toLowerCase();
    if (!searchValue) {
        resultList.innerHTML = '<p>Please enter an ingredient to search.</p>';
        return;
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredientLines.some(ingredient => ingredient.toLowerCase().includes(searchValue))
    );

    if (filteredRecipes.length === 0) {
        resultList.innerHTML = '<p>No recipes found. Try different ingredients.</p>';
    } else {
        displayRecipes(filteredRecipes);
    }
}

// Function to display recipes
function displayRecipes(recipes) {
    const html = recipes.map(recipe => `
        <div>
            <img src="${recipe.image}" alt="${recipe.label}">
            <h3>${recipe.label}</h3>
            <ul>
                ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.url}" target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    `).join('');

    resultList.innerHTML = html;
}
