
import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Revisa tu correo para más instrucciones")
        } catch {
            setError("Error al resetear contraseña")
        }

        setLoading(false)
    }

    return (
        <div className='grid h-screen  bg-pink-200'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className="text-center mb-4 text-lg	 font-semibold uppercase">Recuperar Contraseña</h2>
                {error && <div className='text-red-600 font-bold'>{error}</div>}
                {message && <div className='text-green-600 font-bold'>{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div id="email">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
                        <input className='w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white' type="email" ref={emailRef} required />
                    </div>
                    <button disabled={loading} className="transform w-full bg-yellow-400 text-black font-bold py-2 px-4  mb-8 hover:text-white  hover:bg-pink-600 rounded-full" type="submit">
                        Recuperar Contraseña
            </button>
                </form>

                <Link to="/login" className=' transform  text-center underline text-md text-grey-dark hover:scale-125'>Ingresar</Link>


                <Link to="/signup" className=' transform  text-center underline text-md text-grey-dark hover:scale-125'>Crear cuenta</Link>
            </div>
        </div>
    )
}