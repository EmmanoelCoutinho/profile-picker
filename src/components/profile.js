//importing axios and react
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './nav';

import { useSelector, /* useDispatch */ } from 'react-redux';

import { Link } from 'react-router-dom';

import '../styles/profile.css';
import '../styles/main.css';

function Template () {

    //const dispatch = useDispatch();

    const input = useSelector(state => state.calculator);

    //const [input,setInput] = useState({input: ''});
    const [info,setInfo] = useState({
                login: '' ,
                name: '' ,
                email: '' ,
                location: '' ,
                company: '' ,
                bio: '' ,
                avatar_url: '',
                followers_url: '' ,
                following_url: '' ,
                organization_url: '',
                starred_url: '' ,
                public_repos: '' ,
                public_gists: '' ,
                followers: '' ,
                following: '' 
    });

    const getApi = () => {
        const url = 'https://api.github.com/users';
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

        axios.get(`${url}/${input}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then(response => {
            setInfo(response.data);
            console.log(response.data);
        });
    }
    

    useEffect(() => {
        getApi()
    })

    return (
        <div className='template'>
            <header className='header'>
                    <p>#{info['login']}</p>
                    <Link to='/'>
                    <button >Sair 
                    <i class="fas fa-sign-out-alt"></i>
                    </button>
                    </Link>
            </header>
            <div class="avatar">
                <img src={info['avatar_url']} alt='profile_avatar'/>
            </div>
            <div class="content">
                <i id="square" class="fas fa-square"></i>
                <h1>{info['name']}</h1>
                <p>{info['email']}</p>
                <p>{info['location']}</p>
            </div>
            <div className="followers-container">
                <div className="followers">
                    <h1>{info['followers']}</h1>
                    <p>Seguidores</p>
                </div>
                <div className="following">
                    <h1>{info['following']}</h1>
                    <p>Seguindo</p>
                </div>
                <div className="repo">
                    <h1>{info['public_repos']}</h1>
                    <p>Repos</p>
                </div>
            </div>
            <div className='bio'>
                <i id="square" class="fas fa-square"></i>
                <h1>BIO</h1>
                <p>{info['bio']}</p>
            </div>
            <footer>
                <Navbar /> 
            </footer>
        </div>
    );
}

export default Template;
 



    

    


