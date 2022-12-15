const json = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


async function apiFetch() {
  try {
    const response = await fetch(json);
    if (response.ok) {
        const fruits = await response.json();
        outputInfo(fruits);
    } 
    else {
        throw Error(await response.text());
    }
  } catch (error){
    console.log(error);
  }
}



function outputInfo(fruits){
    const card = document.getElementById('output-card');
    const name = document.createElement('h2');
    const date = document.createElement('p');
    const contact = document.createElement('p');
    const ingredients = document.createElement('p');
    const instructions = document.createElement('p');
    const nutrition = document.createElement('p');
    const nutritionList = document.createElement('ul');

    card.appendChild(name);
    card.appendChild(contact);
    card.appendChild(ingredients);
    card.appendChild(instructions);
    card.appendChild(nutrition);
    card.appendChild(nutritionList);
    card.appendChild(date);


    name.innerHTML = `${document.getElementById('firstname').value}'s Specialty Drink`;
    contact.innerHTML = `${document.getElementById('email').value} - ${document.getElementById('phone').value}`;
    date.innerHTML = `Created ${new Date()}`;
    ingredients.innerHTML = `<strong>Ingredients:</strong> ${document.getElementById('fruit1').value}, 
        ${document.getElementById('fruit2').value}, ${document.getElementById('fruit3').value}. `;
    instructions.innerHTML = `<strong>Special Instructions:</strong> <em>${document.getElementById('instructions').value}</em>`;
    nutrition.innerHTML = `<strong>Nutritional Information:</strong>`;

    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;

    const chosenFruits = fruits.filter(fruits => fruits.name === fruit1 || fruits.name === fruit2 || fruits.name == fruit3);
    
    let sumCarbs = (chosenFruits[0].nutritions.carbohydrates) + (chosenFruits[1].nutritions.carbohydrates) + 
        (chosenFruits[2].nutritions.carbohydrates);
    const totalCarbs = document.createElement('li');
    totalCarbs.innerHTML = `Total Carbs: <strong>${sumCarbs.toFixed(0)}</strong>`;
    nutrition.appendChild(totalCarbs);

    let sumProtein = (chosenFruits[0].nutritions.protein) + (chosenFruits[1].nutritions.protein) + 
    (chosenFruits[2].nutritions.protein);
    const totalProtein = document.createElement('li');
    totalProtein.innerHTML = `Total Protein: <strong>${sumProtein.toFixed(0)}</strong>`;
    nutrition.appendChild(totalProtein);

    let sumFat = (chosenFruits[0].nutritions.fat) + (chosenFruits[1].nutritions.fat) + 
    (chosenFruits[2].nutritions.fat);
    const totalFat = document.createElement('li');
    totalFat.innerHTML = `Total Fat: <strong>${sumFat.toFixed(0)}</strong>`;
    nutrition.appendChild(totalFat);

    let sumSugar = (chosenFruits[0].nutritions.sugar) + (chosenFruits[1].nutritions.sugar) + 
    (chosenFruits[2].nutritions.sugar);
    const totalSugar = document.createElement('li');
    totalSugar.innerHTML = `Total Sugar: <strong>${sumSugar.toFixed(0)}</strong>`;
    nutrition.appendChild(totalSugar);

    let sumCalories = (chosenFruits[0].nutritions.calories) + (chosenFruits[1].nutritions.calories) + 
    (chosenFruits[2].nutritions.calories);
    const totalCalories = document.createElement('li');
    totalCalories.innerHTML = `Total Calories: <strong>${sumCalories.toFixed(0)}</strong>`;
    nutrition.appendChild(totalCalories);
    

    let numberOfDrinks = localStorage.getItem("drinks-created");

    if (!numberOfDrinks) {
    numberOfDrinks = 0;
    }
    numberOfDrinks = +numberOfDrinks + 1; 

    localStorage.setItem("drinks-created", numberOfDrinks);
    document.getElementById("numberDrinks").innerHTML = numberOfDrinks;
}


const z = document.getElementById('submitBtn')
z.onclick = apiFetch;


