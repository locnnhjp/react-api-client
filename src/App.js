import "./App.css";
import React from "react";
import Users from "./Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./Components/UserDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user/add" element={<UserDetail />} />
                <Route path="/user/:userID" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
