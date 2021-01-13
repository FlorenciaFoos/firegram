import React, { useRef, useState } from "react"

import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import image from "../../assets/img/perro_enchufe.png"


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/pictures")
        } catch {
            setError("Error al iniciar sesión")
        }

        setLoading(false)
    }

    return (
        <div className='grid h-screen grid-cols-2 '>
            <div className='flex flex-col  items-center'><img className='object-center' src={image} alt="perro con enchufe" /></div>
            <div className='flex flex-col justify-evenly items-center'>
                <h2 className="  mb-4 text-lg	 font-semibold uppercase">Ingresar</h2>
                {error && <div className='text-red-600 font-bold'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className='w-full' id="email">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
                        <input className=' w-full bg-gray-200 focus:bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3' type="email" ref={emailRef} required />
                    </div>
                    <div className=' w-full ' id="password">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Contraseña</label>
                        <input className=' w-full bg-gray-200 focus:bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3' type="password" ref={passwordRef} required />
                    </div>
                    <button disabled={loading} className="transform w-full bg-blue-500 text-white font-bold py-2 px-4   hover:bg-red-500 rounded-full" type="submit">
                        Ingresar
            </button>
                </form>

                <Link to="/forgot-password" className=' transform    underline text-md text-grey-dark hover:scale-125'>Olvidaste la contraseña?</Link>



                <Link to="/signup" className=' transform   underline text-md text-grey-dark hover:scale-125'>Crear Cuenta</Link>

            </div>

        </div>
    )
}