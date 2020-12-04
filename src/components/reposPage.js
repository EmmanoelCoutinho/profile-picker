import React, { useState, useEffect }from 'react';
import axios from 'axios';

import '../styles/repo.css'
import Navbar from './nav';

import {useSelector} from 'react-redux'

const Repospage = () => {

    const input = useSelector(stage => stage.calculator)

    const [repo,setRepo] = useState({
        name: '',
        stargazers_count: '',
        private: '',
        description: ''

    })

    //https://api.github.com/users/EmmanoelCoutinho/repos

    const getApi = () => {
        const url = 'https://api.github.com/users';
        //const clientId = '944d61c1ca5116b8bcb7';
        //const clientSecret = '6c8f48b58f485f563fd2f534a47576b23fd8d5c0';

        axios.get(`${url}/${input}/repos`)
        .then(response => {
            setRepo(response.data[0]);
            console.log(response.data[0]);
        });
    }

    useEffect(() => getApi(),[])

    const Reposbash = () => {
        return (
            <div className='repo-component'>
                <i id="square" class="fas fa-square"></i>
                <h1>{repo['name']}</h1>
                <p id='description'>{repo['descripiton']}Repository for centralization of the BrasilApp<br /> mobile project</p>
                <i id="stars" class="far fa-star"></i>
                <p id="id-stars">{repo['stargazers_count']}</p>
            </div>
        );
    }

    return(
        <div>
        <div className='repo-page'>
            <header className='header-repo'>
                <button className='back-button' onClick={() => window.history.back()}>
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h1>repositórios</h1>
            </header>
            <Reposbash />
            <Reposbash />
            <Reposbash />
        </div>
        <Navbar />
        </div>
    );
};

export default Repospage;