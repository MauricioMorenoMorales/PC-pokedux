import React, { useEffect } from 'react';
import { getPokemons } from '../../api/getPokemons.service';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
	useEffect(() => {
		getPokemons().then(response => console.log(response));
	}, []);

	return (
		<div className="Home">
			<Searcher />
			<PokemonList />
		</div>
	);
}

export default Home;
