import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css';

const Navbar = () => {

    return(
        <div className="navbar">
            <Link className="home-nav" to="/profile" >
            <button>
            <i class="fas fa-home"></i>
                <p>Home</p>
            </button>
            </Link>
            <Link className="repos-nav" to="/repos" >
            <button>
            <i class="fab fa-github"></i>
                <p>Repos</p>
            </button>
            </Link>
            <Link className="followers-nav" to="/followers" >
            <button>
            <i class="fas fa-user-friends"></i>
                <p>Seguidores</p>
            </button>
            </Link>
            <Link className="following-nav" to="/following" >
            <button>
            <i class="fas fa-user-friends"></i>
                <p>Seguindo</p>
            </button>
            </Link>
        </div>
    );
};

export default Navbar;