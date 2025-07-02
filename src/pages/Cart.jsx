import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleAdd = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
        <section className='cart'>
            <h3>Detalles del pedido:</h3>
            <div className='cart-items'>
              	{cart.map((item) => (
                  <div className='cart-item' key={item.id}>
                    <div className='image-name'>
                      <img src={item.img} alt={item.name} />
                      <h5>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                    </div>
                    <div className='price-count'>
                      <h5>${item.price.toLocaleString()}</h5>
                      <button className='btn btn-outline-danger' onClick={() => handleRemove(item.id)}>-</button>
                      <h5>{item.count}</h5>
                      <button className='btn btn-outline-primary' onClick={() => handleAdd(item.id)}>+</button>
                    </div>
                  </div>
                ))}
            </div>
            <h2>Total: ${total.toLocaleString()}</h2>
            <button className='btn btn-success'>Pagar</button>
        </section>
    </>
  )
}

export default Cart