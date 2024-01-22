import React from 'react';
import pokemonLogo from '../assets/pokemon-logo.png'

const Header = () => {
    return (
        <header>
            <img className="logo"
            src={pokemonLogo} alt="Pokemon Logo"/>
        </header>
    );
};

export default Header;