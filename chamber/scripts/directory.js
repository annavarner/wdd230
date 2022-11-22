const requestURL = './json/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });



  function displayBusinesses(business) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let infodiv = document.createElement('div')
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let level = document.createElement('p');

  
    card.setAttribute('class', 'busCard');
    h2.textContent = `${business.name}`;
    infodiv.setAttribute('class', 'infodiv')

    address.innerHTML = `<strong>Address</strong>: ${business.address}`;
    phone.innerHTML = `<strong>Phone #</strong>: ${business.phoneNumber}`;
    url.innerHTML = `<strong>Website</strong>: <a href="http://${business.url}"> ${business.url}</a>`;
    level.innerHTML = `<strong>Membership Level</strong>: ${business.membershipLevel}`;

  

    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Logo for ${business.name}`);
    image.setAttribute('loading', 'lazy');
  
    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(infodiv);
    infodiv.appendChild(address);
    infodiv.appendChild(phone);
    infodiv.appendChild(url);
    infodiv.appendChild(level);

  
    document.querySelector('div.cards').appendChild(card);
  }