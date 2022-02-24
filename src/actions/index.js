import axios from 'axios';
import { getPokemons } from '../api/getPokemons.service';
import { CLEAR_ERROR, SET_ERROR, SET_POKEMON } from './types';

export const setPokemon = payload => ({
	type: SET_POKEMON,
	payload,
});

export const clearError = payload => ({
	type: CLEAR_ERROR,
	payload,
});

export const setError = payload => ({
	type: SET_ERROR,
	payload,
});

export const getPokemonWithDetails = () => dispatch =>
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
