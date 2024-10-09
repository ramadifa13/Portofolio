import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


const FadeSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const textItems = ["Ramadifa Esa Putra", "A Frontend Developer.", "A Fullstack Developer."];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 3600);

        return () => clearInterval(interval);
    }, [currentIndex, textItems.length]);
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={textItems[currentIndex]}
                initial={{ opacity: 0 }}
                className="fw-bold"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8 }}
            >
                {textItems[currentIndex]}
            </motion.span>
        </AnimatePresence>
    );
};

export default FadeSection;
