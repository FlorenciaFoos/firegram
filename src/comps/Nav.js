import React, { useState } from 'react';
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

const Nav = () => {

  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()



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
    <header className="title">
      <h1>PetGram</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="link" onClick={handleLogout}>
        Salir
        </Button>
    </header>
  )
}

export default Nav;