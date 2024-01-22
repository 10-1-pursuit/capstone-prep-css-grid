import React from 'react';
import pokeGIF from '../assets/ghost-poke.gif'

const Main = ({ pokemon }) => {
    return (
        <main className='pokemon'>
            { pokemon ? 
                <div>
                    <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    <h3>ID: {pokemon.id}</h3>
                    <h3>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</h3>

                    <img
                    className="sprite"
                    src={pokemon.sprites.front_default}
                    />
                </div> 
                : 
                <div className="img-container">
                    <img 
                    className="poke-gif"
                    src={pokeGIF} 
                    />
                </div>
            
            }
        </main>
    );
};

export default Main;