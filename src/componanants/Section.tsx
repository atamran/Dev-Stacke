import React from 'react';
import Logo from "../assets/logo-text.png"
const Section = () => {
    return (
        <div className='flex justify-between gap-7 container mx-auto mt-8 border-b border-gray-200 mb-4'>
            <div className='mb-4'>
                <img src= {Logo} alt="" />
                <p className='mb-4 mt-4'>Curated tools, technologies, and resources for developers building
modern software.</p>
          <ul className='flex gap-4 font-bold '>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
            </div>
            <div>
                <h1 className='font-bold mb-2'>PRODUCT</h1>
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Project</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold mb-2'>COMPANY</h1>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div> 
                <h1 className='font-bold mb-2'>LEGAL</h1>
                <ul className='mb-8'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                
                </ul>
            
            </div>
        </div>
    );
};

export default Section;