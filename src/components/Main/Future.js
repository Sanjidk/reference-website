import React from 'react';
import logo from '../../img/logo.png';

const Future = () => {
    return (
        <div className='bg-back-cam bg-no-repeat bg-cover mt-20 pt-8 text-center'>
            <div className='max-w-5xl mx-auto px-5 my-4'>
                <p className="text-blue-500 font-bold"> # Future Plan # </p>
                <h1 className="text-3xl font-bold"> My New Plan and Progress !! </h1>
                <p className="text-gray-400">Planning can involve photographing recurring or special events. For example, in the course of my German Angst project, I visited the Mardi Gras celebrations in Cologne. I had an idea of what to expect before I went, but the photos I captured exceeded my wildest hopes.</p>
                <button className="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5 lg:mt-8">Write me an E-mail </button>

                <div className='flex justify-around items-center mt-20'>
                <h1 className='text-gray-500 font-bold'>Copyright from Md Mahmud Sanjid</h1>
                <img width='150px' src={logo} alt="" />

            </div>
            </div>

        </div>
    );
};

export default Future;