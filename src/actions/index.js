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
