import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import auth from "../utils/auth";

const Header = () => {
    const { loading, data: userData } = useQuery(GET_ME);
    const user = userData?.me || {};

    return (
        <header className="header">
            <h1>
                my<span style={{ color: "var(--primary)" }}>Movie</span>Database
            </h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/saved"}>My Movies</Link>
                {!user.username ? (
                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>
                ) : (
                    <button onClick={auth.logout}>Logout</button>
                )}
            </nav>
        </header>
    );
};
export default Header;
