const axios = require('axios')

const getApi = () => {
    const url = 'https://api.github.com/users';
    //const clientId = '944d61c1ca5116b8bcb7';
    //const clientSecret = '6c8f48b58f485f563fd2f534a47576b23fd8d5c0';

    axios.get(`${url}/EmmanoelCoutinho/repos`)
    .then(response => {
        console.log(response.data[0].name);
    });
}

getApi();