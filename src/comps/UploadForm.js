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
        <form action="">
            <label >
                <input type="file" onChange={changeHandler} />
                <FontAwesomeIcon icon={faPlus} />
            </label>

            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div >{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;