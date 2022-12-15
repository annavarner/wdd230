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

  apiFetch();
