import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ContactList from "./Components/ContactList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactDetail } from "./Components/ContactDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/contact/add" element={<ContactDetail />} />
                <Route path="/contact/:contactID" element={<ContactDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
