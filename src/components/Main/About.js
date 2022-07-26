import React, { useEffect } from 'react';
import './About.css';
import bubble from '../../img/bubble.png';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])



    return (
        <div className='relative -z-0'>
            <div data-aos="fade-up" className="flex flex-col lg:flex-row lg:gap-20 lg:mt-40 mt-16 max-w-5xl mx-auto px-5">
                <div className='w-96'>
                    <p className="text-red-500 font-bold">About Me</p>
                    <h1 className="text-xl font-bold mt-4">A Wildlife Photographer,</h1>
                    <h1 className="text-xl font-bold"> Web Developer,</h1>
                    <h1 className="text-xl font-bold"> Frontend Developer,</h1>
                    <h1 className="text-xl font-bold"> MERN Stack Developer</h1>
                    <button className="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5 lg:mt-8">My Portfolio</button>
                </div>
                <div className='w-96 lg:mt-0 mt-20'>
                    <p className='text-zinc-500'>
                        Over the past 1 and half years, as a developer, I have designed and launched customized, responsive websites etc using React and MongoDB. I have also added firebase for authentication login and use heroku to connect back-end servers. I use Bootstrap5, Tailwind ( DaisyUI ), Toastify to make this website more attractive and easy to customizable.
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" className='bubbles'>
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
            </div>



        </div>
    );
};

export default About;