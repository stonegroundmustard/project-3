import React, { useRef, useState } from "react";

import "../styles/Login.css";

const Login = () => {
    const [signingUp, setSigningUp] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    function handleToggleSignUp() {
        setEnteredEmail("");
        setEnteredUsername("");
        setEnteredPassword("");
        setSigningUp((prevState) => {
            return !prevState;
        });
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log({ enteredEmail, enteredUsername, enteredPassword });

        setEnteredEmail("");
        setEnteredUsername("");
        setEnteredPassword("");
    }

    function handleInputChange(event) {
        const inputName = event.target.name;

        if (inputName === "email") return setEnteredEmail(event.target.value);
        if (inputName === "username")
            return setEnteredUsername(event.target.value);
        if (inputName === "password")
            return setEnteredPassword(event.target.value);
    }

    return (
        <main className="login-page">
            {!signingUp ? (
                <div className="login-container">
                    <h1>Login</h1>
                    <form
                        action="submit"
                        className="login-form"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={enteredUsername}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input
                                type="text"
                                name="password"
                                value={enteredPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="change-form" onClick={handleToggleSignUp}>
                        Sign up instead
                    </div>
                </div>
            ) : (
                <div className="sign-up-container">
                    <h1>Signup</h1>
                    <form
                        action="submit"
                        className="singup-form"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={enteredEmail}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={enteredUsername}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input
                                type="text"
                                name="password"
                                value={enteredPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="change-form" onClick={handleToggleSignUp}>
                        Back to login
                    </div>
                </div>
            )}
        </main>
    );
};
export default Login;
