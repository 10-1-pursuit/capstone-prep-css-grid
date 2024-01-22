import React, { useState } from 'react';
import psyduck from '../assets/psyduck.png'


const SearchNav = ({ setPokemon }) => {
    const [poke, setPoke] = useState('')

    const handleChange = (event) => {
        setPoke((prev) => event.target.value)
    }

    const fetchPokemon = (event) => {
        event.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            .then(res => res.json())
            .then(res => {
                setPoke(poke => "")
                setPokemon(res)
                console.log(res)
            })
    }

    return (
        <nav>
            <form onSubmit={fetchPokemon}>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={poke}
                    placeholder="name / id"
                />
                <button type="submit">
                    <img 
                        src={psyduck} alt="Psyduck Button"
                        className="psyduck-button"
                    />
                </button>
            </form>
        </nav>
    );
};

export default SearchNav;