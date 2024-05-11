import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Home = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        const text = 'Bangladesh';
        const splittedText = text.split('');
        setText(splittedText);

        gsap.from('span.gsapText', {
            y: 300,
            opacity: 0,
            duration: 1,
            stagger:0.5
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-slate-900">
            {text.map((item, index) => (
                <span className="gsapText text-white text-5xl font-bold" key={index}>{item}</span>
            ))}
        </div>
    );
};

export default Home;
