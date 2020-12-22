import React from 'react';

import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedImg }) {

    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-20">
            {docs && docs.map(doc => (
                <motion.div key={doc.id} className='relative h-0 overflow-hidden py-40 px-20 opacity-80'
                    layout
                    whileHover={{ opacity: 1 }} s
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic" className='min-w-full min-h-full  top-0 left-0 max-w-md absolute'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;
