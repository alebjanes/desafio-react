import './Register.css';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validarInput = (e) => {
        e.preventDefault()
        
        if (email === '') {
            alert('Debes agregar un email');
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
        }

        else {
            alert ('Registro exitoso');
        }
    }

    return (
        <section className="register">
            <h2>Register</h2>
            <form onSubmit={validarInput}>
                <label>Email</label>
                <input className="form-control" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <label>Confirm Password</label>
                <input className="form-control" type="password" placeholder="Repeat Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="btn btn-dark mt-3" type="submit">Register</button>
            </form>

        </section>
    )
}

export default Register