import React from 'react';
import { Image, Label, Grid, Icon } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';

const PokemonCard = ({ pokemon }) => {
	return (
		<Grid.Column mobile={16} tablet={8} computer={4}>
			<div className="PokemonCard">
				<Icon name="favorite" color={FAV_COLOR} />
				<Image
					centered
					src={pokemon.sprites.front_default}
					alt="Pokemon Front"
				/>
				<p className="Pokemon-title">{pokemon.name}</p>
				{pokemon.types.map(element => (
					<Label color={MAIN_COLOR} key={`${pokemon.id}->${element.type.name}`}>
						{element.type.name}
					</Label>
				))}
			</div>
		</Grid.Column>
	);
};

export default PokemonCard;
