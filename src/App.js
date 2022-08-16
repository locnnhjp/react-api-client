import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import BookDetail from "./Components/BookDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="book/add" element={<BookDetail />} />
                <Route path="book/:bookID" element={<BookDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
