import type { promises } from "dns";
import { use } from "react";
import type { ITechnologies } from "../types";

interface ITechnologiesProps {
    usersPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ usersPromise }: ITechnologiesProps) => {
    console.log(usersPromise, "userPromise");
    const data = use(usersPromise);
    console.log(data, "data");
    return (
        <div>
            <div className='items-center justify-between gap-4 container mx-auto my-4'>
                <h1 className='text-4xl font-bold'>Explore the <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent "> Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
           <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-9 rounded-md shadow-2xl p-4'>
            
           
                
            </div>
            <div className='col-span-3 shadow-2xl py-4 p-4 '>
                <h1 className='text-3xl font-bold'>Your Stack</h1>
                <p>No technologies selected yet.</p>
                <div className="border border-gray-200 rounded-xl p-8 shadow-md items-center justify-center">Your stack is empty.</div>
                </div>
           </div>
            </div>

        </div>
    );
};

export default Technologies;