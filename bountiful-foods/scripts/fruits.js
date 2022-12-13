const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const fruit1 = document.getElementById('fruit1');
const fruit2 = document.getElementById('fruit2');
const fruit3 = document.getElementById('fruit3');



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      data.forEach(displayFruit1);
      data.forEach(displayFruit2);
      data.forEach(displayFruit3);
    } 
    else {
      throw Error(await response.text());
    }
  } catch (error){
    console.log(error);
  }
}
  

  function displayFruit1(data) {
    let option = document.createElement('option');
    option.textContent = data.name;
    fruit1.add(option);
  }

  function displayFruit2(data) {
    let option = document.createElement('option');
    option.textContent = data.name;
    fruit2.add(option);
  }

  function displayFruit3(data) {
    let option = document.createElement('option');
    option.textContent = data.name;
    fruit3.add(option);
  }

  function outputInfo(){
    const card = document.getElementById('output-card');
    const name = document.createElement('h3');
    const date = document.createElement('p');
    const contact = document.createElement('p');
    const ingredients = document.createElement('p');
    const instructions = document.createElement('p');
    const nutrition = document.createElement('ul');

    card.appendChild(name);
    card.appendChild(contact);
    card.appendChild(ingredients);
    card.appendChild(instructions);
    card.appendChild(nutrition);
    card.appendChild(date);


    
    name.innerHTML = `${document.getElementById('firstname').value}'s Specialty Drink`;
    contact.innerHTML = `${document.getElementById('email').value} - ${document.getElementById('phone').value}`;

    ingredients.innerHTML = `<strong>Ingredients:</strong> ${document.getElementById('fruit1').value}, 
      ${document.getElementById('fruit2').value}, ${document.getElementById('fruit3').value}. `;
    instructions.innerHTML = `<strong>Special Instructions:</strong> <em>${document.getElementById('instructions').value}</em>`;
    nutrition.innerHTML = `Nutritional Information:`;
    date.innerHTML = `Created ${new Date()}`;


  }
  
  apiFetch();
  const y = document.getElementById('submitBtn')
  y.onclick = outputInfo;