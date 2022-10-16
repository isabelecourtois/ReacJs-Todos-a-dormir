import React from 'react';
import Hero from './Hero';
import IndexContent from './IndexContent';
import ItemListContainer from '../Container/ItemListContainer';
import Testimonial from './Testimonial';

const Index = () => {

	return (
		<div>
			<Hero/>
			<IndexContent/>
			<ItemListContainer /> 
			<Testimonial/>
		</div>
	)
}

export default Index;