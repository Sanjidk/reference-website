import React from 'react';
import sanjid from '../../img/sanju.png';

const Introduction = () => {
    return (
        <div class="hero-content flex-col lg:flex-row">
            <div>
                <h1 class="text-xl font-bold text-amber-400"> Assalamualaikum, Hi I'm</h1>
                <h1 class="text-3xl font-bold text-teal-400">MD MAHMUD SANJID.</h1>
                <p class="py-6">As an enthusiastic and create technologist with hands-on skills in React, Javascript, HTML, CSS, Bootstrap, Tailwind, Firebase, NodeJS and also MongoDB, I am well positioned to leverage my abilities and qualifications to thrive as Front-end Developer.</p>
                <button class="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5">Scroll For More</button>
            </div>
            <img src={sanjid} alt="" />
        </div>
    );
};

export default Introduction;