import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const Skill = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className="flex flex-col lg:flex-row lg:gap-20 lg:mt-40 mt-16 max-w-5xl mx-auto px-5">
            <div data-aos="fade-right" className='w-96'> 
                <p className="text-blue-500 font-bold">My Skills...</p>
                <h1 className="text-3xl font-bold mt-4">Wildlife Photography, ReactJS, JavaScript, MongoDB, NodeJS </h1>
                <button className="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5 lg:mt-8">My Photography</button>
            </div>
            <div data-aos="fade-left" className='w-96 lg:mt-0 mt-20'>
                <p className='text-zinc-500'>
                    Over the past 1 and half years, as a developer, I have designed and launched customized, responsive websites etc using React and MongoDB. I have also added firebase for authentication login and use heroku to connect back-end servers. I use Bootstrap5, Tailwind ( DaisyUI ), Toastify to make this website more attractive and easy to customizable.
                </p>

            </div>
        </div>
    );
};

export default Skill;