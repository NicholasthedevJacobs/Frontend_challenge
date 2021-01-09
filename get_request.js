

const axios = require('axios');



async function makeGetRequest() {

    let res = await axios.get('http://localhost:3001/recipes');
  
    let data = res.data;//data should be stored in this variable
    console.log(data);
  }
  
  makeGetRequest();