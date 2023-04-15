import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import "./App.css";

const httpLink = createHttpLink({
    uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    
    return (
        <ApolloProvider client={client}>
            <div className="app">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Search />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<h1>Wrong page!</h1>} />
                    </Routes>
                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
