import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(API_ENDPOINT)
            .then((res) => {
                const pokemons = res.data.results;
                setPokemons(pokemons);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    });
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Pokemon Name</th>
                    <th scope="col">URL</th>
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PokemonList;
