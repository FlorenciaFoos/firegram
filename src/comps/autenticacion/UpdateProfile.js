import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Nav from '../Nav'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Contraseñas no coinciden")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/pictures")
            })
            .catch(() => {
                setError("Error al editar perfil")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Nav />
            <div className='grid h-4/5 place-items-center'>

                <h2 className="text-center mb-4 text-lg	 font-semibold uppercase">Editar perfil</h2>
                {error && <div className='text-red-600 font-bold'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id="email">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
                        <input className=' w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white'
                            type="email"
                            ref={emailRef}
                            required
                            defaultValue={currentUser.email}
                        />
                    </div>
                    <div id="password">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Contraseña</label>
                        <input className=' w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white'
                            type="password"
                            ref={passwordRef}
                            placeholder="Dejar en blanco si desea conservar lo mismo"
                        />
                    </div>
                    <div id="password-confirm">
                        <label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Confirma contraseña</label>
                        <input className=' w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white'
                            type="password"
                            ref={passwordConfirmRef}
                            placeholder="Dejar en blanco si desea conservar lo mismo"
                        />
                    </div>
                    <button disabled={loading} className="transform w-full bg-yellow-500 text-black font-bold py-2 px-4  hover:text-white hover:bg-pink-800 rounded-full" type="submit">
                        Guardar
            </button>
                </form>


                <Link to="/pictures" className=' transform  text-center underline text-md text-grey-dark hover:scale-125'>Cancelar</Link>

            </div>
        </>
    )
}