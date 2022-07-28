import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";


const Tools = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div data-aos="fade-right" className='max-w-5xl mx-auto px-5 my-8'>
            <div className='flex justify-between mt-28 mb-8'>
                <h1 className='text-4xl font-bold'> Tools <span className='text-3xl text-green-400'> --- </span></h1>
                <button class="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5">Online View</button>
            </div>

            <div class="grid lg:grid-cols-4 grid-cols-1 gap-8">
                <div>
                    <h1 className='font-bold text-2xl text-green-400 border-l-2'> <span className='ml-3'>Filters</span> </h1>
                    <h1 className='text-xl'> UV/Clear/Haze Filter </h1>
                    <h1 className='text-gray-600'>Polarizing Filter</h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-400 border-l-2'> <span className='ml-3'>Tripod</span> </h1>
                    <h1 className='text-xl'> Manfrotto 290 Carbon </h1>
                    <h1 className='text-gray-600'>Osaka OS 550 Tripod</h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-400 border-l-2'> <span className='ml-3'>Flash</span> </h1>
                    <h1 className='text-xl'> Lasting 1/1000 to 1/200 </h1>
                    <h1 className='text-gray-600'>Produces a brief burst of light </h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-400 border-l-2'> <span className='ml-3'>Reflectors</span> </h1>
                    <h1 className='text-xl'> Used to redirect light </h1>
                    <h1 className='text-gray-600'>Given subject or scene</h1>
                </div>
            </div>
        </div>
    );
};

export default Tools;