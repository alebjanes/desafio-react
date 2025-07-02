import { React, useEffect, useState } from 'react'
import Header from './Header';
import CardPizza from './CardPizza';
import './Home.css';

const Home = () => {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		consultarApi();
	}, [])

	const consultarApi = async () => {
		const url = "http://localhost:5000/api/pizzas";
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPizzas(data);
		}
		catch (error) {
			console.error("Error al consultar la API:", error);
		}
	}

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