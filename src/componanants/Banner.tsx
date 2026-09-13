import React from 'react';
import Bannar from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='flex items-center justify-between gap-4 container mx-auto my-4 '>
             <div>
           <h1 className='text-8xl font-bold'>Build Your Ideal<br/>
<span className="text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
   Development Stack</span></h1>
<p>Explore frontend, backend, database, and tooling options,<br/>
compare them side by side, and put together the stack that fits your<br/>
next project.</p>
       <div className="flex gap-4 items-center">
    <button className="bg-pink-600 text-white rounded-md px-4 py-2 ">
        Explore Technologies
    </button>
    <button className="bg-white text-black px-4 py-2 rounded-md border" >Learn More</button>
 </div>

        </div>
    <img src={Bannar} alt="" />
        </div>
    );
};

export default Banner;