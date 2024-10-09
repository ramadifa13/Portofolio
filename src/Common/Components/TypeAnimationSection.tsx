import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationSection = () => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Kerri Deo.',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'A Graphic Designer.',
                    1000,
                    'A Photographer.',
                    1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
            />
        </>
    );
};

export default TypeAnimationSection;
