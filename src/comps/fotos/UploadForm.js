import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {

        let selected = e.target.files[0];
        console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Por favor seleccioná una imagen(jpeg o png)')
        }
    }

    return (

        <div className='flex flex-col items-center mt-20'>
            <h2 className='font-bold text-5xl mb-8'>Tus fotos</h2>
            <p className='font-light text-2xl mb-8'>~Bellas miradas~</p>
            <form action="">
                <label >
                    <input className='opacity-0 w-0 h-0' type="file" onChange={changeHandler} />
                    <FontAwesomeIcon icon={faPlus} className='text-5xl cursor-pointer' />
                </label>


            </form>
            <div className='mt-8'>
                {error && <div className='text-red-600 font-bold'>{error}</div>}
                {file && <div >{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </div>


    )
}

export default UploadForm;