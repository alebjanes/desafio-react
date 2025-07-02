import { React, useEffect, useState } from 'react'
import './Pizza.css';

const Pizza = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/p001"
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        catch (error) {
            console.error("Error al consultar la API:", error);
        }
    }

    return (
        <>
            <section className="pizza">
                <img src={data.img} alt={data.name} />
                <div className='description'>
                    <h3>Pizza {data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                    <p className='description-text'>{data.desc}</p>
                    <h5>Ingredientes:</h5>
                    <ul className='ingredients'>
                        {data.ingredients && data.ingredients.map((ingredient, index) => (
                            <li key={index}>🍕 {ingredient}</li>
                        ))}
                    </ul>
                    <h4>${data.price.toLocaleString()}</h4>
                    <button className='btn btn-success'>Añadir al carrito 🛒</button>
                </div>
            </section>
        </>
    )
}

export default Pizza