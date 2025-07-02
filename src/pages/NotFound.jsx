import React from 'react'
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img style={{ width: "200px", marginTop: "2rem" }} src="/images/oops_icon.png" alt="Not Found" className='not-found' />
            <h2>Oops! Esta página que no existe</h2>
            <h3>
                <Link to="/" className="text-decoration-none">
                    Vuelve al home plis
                </Link>
            </h3>
        </section>
    )
}

export default NotFound