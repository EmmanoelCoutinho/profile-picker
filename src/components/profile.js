//importing axios and react
import React from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';
const clientId = '944d61c1ca5116b8bcb7';
const clientSecret = '6c8f48b58f485f563fd2f534a47576b23fd8d5c0';


    //fuction to call api data
    async function getUser() {
        await axios.get(`${url}/EmmanoelCoutinho?client_id=${clientId}&client_secret=${clientSecret}`)
        .then(response => console.log(response.data))
        
      

       // return profile;
    }


    const template = () => {
        return (
        <h1>Seja bem vindo ao novo componente</h1>
        );
    }



    //getUser()

    export default template;

    


