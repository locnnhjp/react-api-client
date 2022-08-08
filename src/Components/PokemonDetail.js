import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function PokemonDetail() {
    const [pokemmonDetail, setPokemonDetail] = useState({});
    const { state } = useLocation();
    let apiEndpoint = state.apiEndpoint;
    let {pokemonName} = useParams();
    useEffect(() => {
        axios
            .get(apiEndpoint)
            .then((res) => {
                const detailData = res.data;
                let pokemmonDetail = {
                    ability: detailData.abilities[0].ability.name,
                    baseExp: detailData.base_experience
                }
                setPokemonDetail(pokemmonDetail);

            })
            .catch((error) => console.log(error));
    });
    return (
        <div>
            <h3>Name: {pokemonName}</h3>
            <h3>Ability: {pokemmonDetail.ability}</h3>
            <h3>Base Experience: {pokemmonDetail.baseExp}</h3>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default PokemonDetail;
