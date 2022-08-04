import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
class PokemonList extends React.Component {
    state = {
        pokemons: [],
        loading: false
    };
    componentDidMount() {
        this.setState({loading: true});
        axios
            .get(API_ENDPOINT)
            .then((res) => {
                const pokemons = res.data.results;
                this.setState({ pokemons: pokemons });
            })
            .catch((error) => console.log(error))
            .finally(() => {
                this.setState({loading: false});
            })
    }
    render() {
        const {loading, pokemons} = this.state;
        if (loading) return (
            <div>
                <p>Loading...</p>
            </div>
        )
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
                                <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                                    {pokemon.url}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default PokemonList;
