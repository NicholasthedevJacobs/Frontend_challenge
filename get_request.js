

const axios = require('axios');



async function makeGetRequest() {

    let res = await axios.get('http://localhost:3001/recipes');
  
    let data = res.data;//data should be stored in this variable
    console.log(data);
  }
  
var object = makeGetRequest();

  function testing(){
      for (var i = 0; i < object.length; i++){
      if (object[i].title == 'Pankcake Mountain'){
          console.log('found it');
      }
    }
  }

  testing();