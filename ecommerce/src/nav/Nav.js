import React from 'react'
import './Nav.css'
import Avatar from '../images/image-avatar.png'

export default function Nav() {
  return (
    <div className='nav-cont '>
      <div className='Navbar pb-4'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
          <div class="container-fluid bg-white">
            <h2><a class="navbar-brand" href="#">SNEAKERS</a></h2>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ps-5">
                <a class="nav-link active" aria-current="page" href="#">Collection</a>
                <a class="nav-link" href="#">Men</a>
                <a class="nav-link" href="#">Women</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className='d-flex pe-5 p-3 justify-content-betwwen'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart4 mx-3" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <img src={Avatar} style={{ width:"3rem" ,height:"3rem"}}/> 
          </div>
        </nav>
      </div>
    </div>

  )
}

