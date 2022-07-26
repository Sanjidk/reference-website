import React from 'react';
import sanjid from '../../img/sanju.png';

const Introduction = () => {
    return (
        <div class="hero-content flex-col lg:flex-row-reverse max-w-5xl mx-auto px-5">
                        <img src={sanjid} alt="" />

            <div>
                <h1 class="text-xl font-bold"> Assalamualaikum, Hi I'm</h1>
                <h1 class="text-3xl font-bold text-teal-400">MD MAHMUD SANJID.</h1>
                <p class="py-6">I am a Junior MERN Stack Web Developer. This is my profession that i want to be. But i have also a passion and that is to be a Wildlife Photographer. So, that is my Dream. </p>
                <button class="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5">Scroll For More</button>
            </div>
        </div>
    );
};

export default Introduction;