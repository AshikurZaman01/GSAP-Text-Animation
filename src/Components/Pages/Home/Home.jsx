import { useEffect } from "react";

const Home = () => {


    useEffect(() => {

        const h1 = document.querySelector('h1');
        const h1Text = h1.innerText;

        const splittedText = h1Text.split('');

        let empty = "";

        splittedText.forEach((letter) => {
            empty += letter;
            empty += letter;

        })

        h1.innerText = empty;

    }, [])


    return (
        <div className="flex justify-center items-center h-screen bg-slate-900">
            <div>
                <h1 className="text-9xl font-semibold text-gray-500">Bangladesh</h1>
            </div>
        </div>
    );
};

export default Home;
