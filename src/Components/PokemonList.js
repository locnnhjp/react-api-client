import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonList() {
    const limit = 100;
    const [pokemons, setPokemons] = useState([]);
    const [current, setCurrent] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=200`);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    useEffect(() => {
        axios
            .get(current)
            .then((res) => {
                const pokemons = res.data.results;
                const next = res.data.next;
                const prev = res.data.previous;
                setPokemons(pokemons);
                setNext(next);
                setPrev(prev);
            })
            .catch((error) => console.log(error));
    });
    let navigate = useNavigate();
    const openDetail = (pokemonName, apiEndpoint) => {
        navigate(`/detail/${pokemonName}`, {state: {apiEndpoint: apiEndpoint}});
    }
    return (
        <div>
            <div>
                <button onClick={() => setCurrent(prev)} disabled={prev == null ? true : false}>Previous</button>
                <button onClick={() => setCurrent(next)} disabled={next == null ? true : false}>Next</button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pokemon Name</th>
                        <th scope="col">URL</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon, index) => (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{pokemon.name}</td>
                            <td>
                                <a
                                    href={pokemon.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {pokemon.url}
                                </a>
                            </td>
                            <td>
                                <button onClick={() => openDetail(pokemon.name, pokemon.url)}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PokemonList;
