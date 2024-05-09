import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {


    useEffect(() => {
        const h1 = document.querySelector("h1");
        const h1Text = h1.textContent;

        const splittedTExt = h1Text.split("");

        let ee = "";
        let ee = "";
        splittedTExt.map((lett, indx) => {
            return (

                ee += `<span key={indx} className="text-9xl font-semibold text-gray-500">${lett}</span>`
            )
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
