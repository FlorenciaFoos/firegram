import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        //chequea si es la foto o el div donde estoy haciendo click
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop fixed top-0 left-0 min-w-full min-h-full bg-gray-900 bg-opacity-75" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="foto modal" className='block my-16 mx-auto max-h-96  shadow-lg border-8 border-gray-50 border-opacity-25'
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal;