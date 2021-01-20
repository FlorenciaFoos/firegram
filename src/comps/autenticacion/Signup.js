import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import image from "../../assets/img/arrow-dog.png"

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
        <div className='grid min-h-screen grid-cols-1 grid-rows-2 md:grid-cols-2  md:grid-rows-1 bg-pink-200'>
            <div className='flex  items-center'><img className='object-center md:ml-8' src={image} alt="perro con enchufe" /></div>
            <div className='flex flex-col justify-center items-center'>

                <h2 className="text-center mb-4 text-lg	 font-semibold uppercase">Crea tu cuenta</h2>
                {error && <div className='text-red-600 font-bold'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id="email" className='w-full'>
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
                        <input className=' w-full bg-white text-black   border border-gray-200 rounded py-3 px-4 mb-3' type="email" ref={emailRef} required />
                    </div>
                    <div id="password" className='w-full'>
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Contraseña</label>
                        <input className=' w-full bg-white text-black  border border-gray-200 rounded py-3 px-4 mb-3' type="password" ref={passwordRef} required />
                    </div>
                    <div id="password-confirm" className='w-full'>
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Confirma contraseña</label>
                        <input className=' w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3' type="password" ref={passwordConfirmRef} required />
                    </div>
                    <button disabled={loading} className="transform w-full bg-yellow-400 text-black font-bold py-2 px-4  mb-8 hover:text-white  hover:bg-pink-600 rounded-full" type="submit">
                        Crear cuenta
              </button>
                </form>

                <Link to="/login" className=' transform  text-center underline text-md text-grey-dark hover:scale-125'>Ingresa</Link>

            </div>
        </div>
    )
}