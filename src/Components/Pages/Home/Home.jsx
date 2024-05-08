import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {


    useEffect(() => {

        const h1 = document.querySelector('h1');
        const h1Text = h1.innerText;

        const splittedText = h1Text.split('');

        var empty = "";

        splittedText.forEach((letter) => {
            empty += `<span>${letter}</span>`;
        })

    }, [])

    useGSAP(() => {
        gsap.from('h1', {
            y: 100,
            duration: 1,
             delay: 0.5,
             opacity:0
        })
    })

    return (
        <div className="flex justify-center items-center h-screen  bg-slate-900">
            <div>
                <h1 className="text-9xl font-semibold text-gray-500">Bangladesh</h1>
            </div>
        </div>
    );
};

export default Home;
