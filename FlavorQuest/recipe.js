let searchButton = document.querySelector('.srch-btn');
let recipeButton = document.querySelector('.btn');
let closeButton = document.querySelector('#close');
searchButton.addEventListener('click', getIngredient);

function getIngredient() {
    let item = "";
    let input = document.querySelector('#search').value.trim();
    //filter by main ingredient
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((recipe) => {
            if (recipe.meals) {
                recipe.meals.forEach((meal) => {
                    //console.log(recipe.meals);
                    let ingredient =
                        `<div class="item" data-id='${meal.idMeal}'>
                <picture class="image">
                    <img src="${meal.strMealThumb}">
                </picture>
                <section class="info">
                    <h2>${meal.strMeal}</h2>
                    <button class="btn">Get Recipe</button>
                </section>
            </div>`;
                    item += ingredient;
                    document.querySelector('.ingredients').innerHTML = item;
                    /*If you use insertAdjacentHTML here, and want to re enter in input box and get another results. So it don't work as you want. 
                    You will see the another ingredients below to the current recipe items that you have already by first onclick on search button.*/
                })
            } else {
                item = "No Recipe Found!";
                document.querySelector('.ingredients').innerHTML = item;
            }
        })
    input.value = "";
}

document.querySelector('.ingredients').addEventListener('click', getRecipe);

function getRecipe(e) {
    e.preventDefault();
    if (e.target.matches('.btn')) {
        let container = e.target.parentNode.parentNode;
        //console.log(container.dataset.id);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${container.dataset.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let meal = data.meals;
                meal = meal[0];
                //console.log(meal);
                let html = `
    	    <h2>${meal.strMeal}</h2>
    	    <button class="recipe-btn">${meal.strCategory}</button>
    		<h3>Instructions:</h3>
    		<p>${meal.strInstructions}</p>
    		<footer><a href="${meal.strYoutube}" target="_blank">Watch Recipe</a></footer>
    	</div>`;
                document.querySelector('.steps').innerHTML = html;
                document.querySelector('.steps').parentElement.classList.add('step');
            })
    }
}

closeButton.addEventListener('click', closeRecipe);

function closeRecipe(){
	document.querySelector('.steps').parentElement.classList.remove('step');
}