import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Header.css"

const Header = () =>{
    return (
        <header className='header'>
            <h1>my<span style={{color: "var(--primary)"}}>Movie</span>Database</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/saved"}>My Movies</Link>
                <button>Login</button>
            </nav>
        </header>
    )
}
export default Header