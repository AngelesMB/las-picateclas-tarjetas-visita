'use strict'

//crear tarjeta con una funcion




fetch('https://awesome-profile-cards.herokuapp.com/card',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });