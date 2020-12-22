import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage'
import { motion } from 'framer-motion'


function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }

    }, [url, setFile])

    return (
        <motion.div className=" h-8 bg-pink-800 mt-8 rounded-2xl"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;