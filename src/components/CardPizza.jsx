import React from 'react'
import './CardPizza.css'

const CardPizza = ({name, price, ingredients, image}) => {
  return (
		<div className="card" style={{ width: "22rem" }}>
			<img className="card-img-top" src={image} alt="Card image cap" />
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<h5 className="card-title">Pizza {name}</h5>
				</li>
				<li class="list-group-item">
					<h6>Ingredientes:</h6>
					<p className='ingredients'>🍕 {ingredients.join(", ")}</p>
				</li>
				<li class="list-group-item">
					<h6 className='precio'>Precio: ${price.toLocaleString()}</h6>
					<div className='card-buttons'>
						<button className="btn mas-btn">Ver más 👀</button>
						<button className="btn add-btn">Añadir 🛒</button>
					</div>
				</li>
			</ul>
		</div>
  )
}

export default CardPizza;