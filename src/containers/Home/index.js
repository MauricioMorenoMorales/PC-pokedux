import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../api/getPokemons.service';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { setError, setPokemon } from '../../actions/';
import './styles.css';
import axios from 'axios';

// const mapStateToProps = state => ({
// 	list: state.list,
// });
// const mapDispatchToProps = dispatch => ({
// 	setPokemons: value => dispatch(setPokemon(value)),
// });

const Home = () => {
	const dispatch = useDispatch();
	const list = useSelector(state => state.list);

	useEffect(() => {
		getPokemons()
			.then(response => {
				const pokemonList = response.results;
				return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)));
			})
			.then(pokemonsResponse => {
				const pokemonsData = pokemonsResponse.map(response => response.data);
				dispatch(setPokemon(pokemonsData));
			})
			.catch(error => dispatch(setError({ message: 'Ocurrió un error' })));
	}, [dispatch]);

	return (
		<div className="Home">
			<Searcher />
			<PokemonList pokemons={list} />
		</div>
	);
};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
