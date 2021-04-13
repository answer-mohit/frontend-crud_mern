import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/">crud-project</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/add">Add post</NavLink>
        </li>
        
      </ul>
      <div className="d-flex justify-content-sm-center">

    <NavLink exact className="btn text-primary mx-2" to="/signup">Signup</NavLink>
  <NavLink  exact className="btn btn-primary px-5" to="/login">Login</NavLink>
    
      </div>
    </div>
  </div>
</nav>        </>
    )
}

export default Navbar
