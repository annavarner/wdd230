const requestURL = './json/data.json';
const cards = document.querySelector('.cards');


// async function getBusinesses() {
//   const response = await fetch(requestURL);
//   const data = await response.json();
//   data.businesses.forEach(business => {
//     displayBusinesses(business)
//   });

//}
// businesses.forEach(displayBusinesses);
fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });



  function displayBusinesses(business) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let infodiv = document.createElement('div')
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let level = document.createElement('p');

  
    // Change the textContent property of the elements 
    card.setAttribute('class', 'busCard');
    h2.textContent = `${business.name}`;
    infodiv.setAttribute('class', 'infodiv')

    address.innerHTML = `<strong>Address</strong>: ${business.address}`;
    phone.innerHTML = `<strong>Phone #</strong>: ${business.phoneNumber}`;
    url.innerHTML = `<strong>Website</strong>: ${business.url}`;
    level.innerHTML = `<strong>Membership Level</strong>: ${business.membershipLevel}`;

  

    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Logo for ${business.name}`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the elements
    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(infodiv);
    infodiv.appendChild(address);
    infodiv.appendChild(phone);
    infodiv.appendChild(url);
    infodiv.appendChild(level);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }