import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validarInput = (e) => {
        e.preventDefault()
        
        if (email === '') {
            alert('Debes agregar un email');
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
        }

        else {
            alert ('Login exitoso');
        }
    }

  return (
     <section className="login">
            <h2>Login</h2>
            <form onSubmit={validarInput}>
                <label>Email</label>
                <input className="form-control" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-dark mt-3" type="submit">Login</button>
            </form>

        </section>
  )
}

export default Login