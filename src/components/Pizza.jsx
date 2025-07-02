import { React, useEffect, useState } from 'react'
import './Pizza.css';

const Pizza = () => {
    const [data, setData] = useState({
        id: "p001",
        name: "Napolitana",
        desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
        ingredients: [
            "mozzarella",
            "tomates",
            "jamón",
            "orégano"
            ],
        price: 5950
    })

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