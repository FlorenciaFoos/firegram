import React, { useState } from 'react';

import { useAuth } from "../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"

const Nav = () => {

  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  const [isOpen, setOpen] = useState("false");

  const handleMenuResponsive = () => {

    setOpen(!isOpen);

  }



  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Error al cerrar sesión")
    }
  }
  return (
    <header >


      <nav className="flex items-center justify-beetween flex-wrap bg-gradient-to-r from-yellow-500 via-red-500 to-pink-800 p-6">
        <div className="flex items-center flex-shrink-0 v mr-6">
          <h1 className="font-semibold text-xl tracking-tight">PetGram</h1>
        </div>
        <div className="block md:hidden">
          <button onClick={handleMenuResponsive} id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div id='menu' className={`uppercase w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "hidden" : ""}`}>
          <div className="text-sm lg:flex-grow">
            <Link to="/update-profile" className="block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4">
              Editar Perfil
          </Link>
            <button className="uppercase block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" onClick={handleLogout}>
              Salir
        </button>
          </div>
        </div>
      </nav>

      {/* {error && <div variant="danger">{error}</div>} */}

    </header>
  )
}

export default Nav;