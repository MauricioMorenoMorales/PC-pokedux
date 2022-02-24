import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../api/getPokemons.service';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { setPokemon } from '../../actions/';
import './styles.css';

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
		getPokemons().then(response => {
			dispatch(setPokemon(response.results));
		});
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
