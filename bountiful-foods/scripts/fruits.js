const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const fruit1 = document.querySelector('fruit1');
const fruit2 = document.querySelector('fruit2');
const fruit3 = document.querySelector('fruit3');



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const fruits = data['name']
      fruits.foreach(displayFruit);
    } 
    else {
      throw Error(await response.text());
    }
  } catch (error){
    console.log(error);
  }
}
    

  
    // const fruits = jsonObject['fruit'];
    // console.log(fruits)
    // fruits.forEach(displayFruit);





  function displayFruit(data) {
    let option = document.createElement('object');
    option.textContent=data[i].name;

    fruit1.appendChild(option);
  

  }
  apiFetch();