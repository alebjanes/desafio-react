import React from 'react'
import Header from './Header';
import CardPizza from './CardPizza';
import './Home.css';

const Home = ({ pizzas }) => {
	return (
		<div>
			<Header />
			<section className="pizzas">
				{pizzas.map((pizza) => (
					<CardPizza
						key={pizza.id}
						name={pizza.name}
						price={pizza.price}
						ingredients={pizza.ingredients}
						image={pizza.img}
					/>
				))}
			</section>
		</div>
	)
}

export default Home;