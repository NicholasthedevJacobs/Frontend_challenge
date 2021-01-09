const axios = require('axios');

axios.get('http://localhost:3001/recipes')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`${e.title}, ${e.description}, ${e.servings}`);
        });
    })
    .catch(error => {
        console.log(error);
    });    