const requestURL = './json/data.json';
const spot1 = document.querySelector('.spot1');
const spot2 = document.querySelector('.spot2');
const spot3 = document.querySelector('.spot3');
let indexList = [];

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const spotlightMembers = jsonObject['businesses'].filter(member => member.membershipLevel === "Silver" ||member.membershipLevel === "Gold");
    indexList = getRandom(0, spotlightMembers.length, 3);

    displaySpotlight(spotlightMembers[indexList[0]], "div.spot1");
    displaySpotlight(spotlightMembers[indexList[1]], "div.spot2");
    displaySpotlight(spotlightMembers[indexList[2]], "div.spot3");
  });



  function displaySpotlight(business, spotNbr) {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');


  
    card.setAttribute('class', 'spotCard');
    h3.textContent = `${business.name}`;
    address.innerHTML = `${business.address}`;
    phone.innerHTML = `${business.phoneNumber}`;
    url.innerHTML = (`<a href="http://${business.url}">${business.url}</a>`);


  

    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Logo for ${business.name}`);
    image.setAttribute('loading', 'lazy');
  
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);

  
    document.querySelector(`${spotNbr}`).appendChild(card);
  }
function getRandom(min, max, total) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let set = new Set()
    while (set.size < total) {
        set.add(Math.floor(Math.random() * (max - min) + min));
    }
    return Array.from(set)
    
}
