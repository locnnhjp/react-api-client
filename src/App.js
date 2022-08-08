import './App.css';
import PokemonList from './Components/PokemonList';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from './Components/PokemonDetail';
import PersonList from './Components/PersonList';
import UserList from './Components/UserList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="detail/:pokemonName" element={<PokemonDetail />} />
        <Route path="personList" element={<PersonList />} />
        <Route path="users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
