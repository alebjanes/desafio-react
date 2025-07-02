import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <>
      <section className="profile">
        <img style={{ width: "200px", marginTop: "2rem" }} src="/images/happy_pizza.png" alt="Perfil de usuario" className="profile-image"  />
        <h3>Tu cuenta</h3>
        <div className="profile-info">
          <p>pizza@mammamia.com</p>
          <button className="btn btn-primary">Cerrar sesión</button>
        </div>
      </section>
    </>
  )
}

export default Profile