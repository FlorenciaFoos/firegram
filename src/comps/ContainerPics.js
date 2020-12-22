import React, { useState } from 'react';
import UploadForm from './galeria/UploadForm';
import ImageGrid from './galeria/ImageGrid';
import Modal from './galeria/Modal';
import Nav from './Nav'

const ContainerPics = () => {

    const [selectedImg, setSelectedImg] = useState(null)




    return (
        <>
            <Nav />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
}

export default ContainerPics;