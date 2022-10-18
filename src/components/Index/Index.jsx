import React from 'react';
import Hero from './Hero';
import IndexContent from './IndexContent';
import ItemListContainer from '../Container/ItemListContainer';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Index = () => {

	return (
		<div>
			 <Hero/> 
			<IndexContent/>
			<ItemListContainer /> 
			<Testimonial/> 
			<Footer/>
		</div>
	)
}

export default Index;