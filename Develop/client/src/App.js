import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";
import Login from "./pages/Login";

function App() {
    return (
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
    );
}

export default App;
