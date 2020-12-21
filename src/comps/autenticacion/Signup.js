import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Las contraseñas no coinciden")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/pictures")
        } catch {
            setError("Error al crear cuenta")
        }

        setLoading(false)
    }

    return (

        <div className='grid h-4/5 place-items-center'>

            <h2 className="text-center mb-4 text-lg	 font-semibold uppercase">Crea tu cuenta</h2>
            {error && <div className='text-red-600 font-bold'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div id="email" className='w-full'>
                    <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
                    <input className=' w-full bg-gray-200 text-black focus:bg-white border border-gray-200 rounded py-3 px-4 mb-3' type="email" ref={emailRef} required />
                </div>
                <div id="password" className='w-full'>
                    <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Contraseña</label>
                    <input className=' w-full bg-gray-200 text-black focus:bg-white border border-gray-200 rounded py-3 px-4 mb-3' type="password" ref={passwordRef} required />
                </div>
                <div id="password-confirm" className='w-full'>
                    <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Confirma contraseña</label>
                    <input className=' w-full bg-gray-200 focus:bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3' type="password" ref={passwordConfirmRef} required />
                </div>
                <button disabled={loading} className="transform w-full bg-yellow-500 text-black font-bold py-2 px-4  hover:text-white hover:bg-pink-800 rounded-full" type="submit">
                    Crear cuenta
              </button>
            </form>

            <Link to="/login" className=' transform  text-center underline text-md text-grey-dark hover:scale-125'>Ingresa</Link>

        </div>
    )
}