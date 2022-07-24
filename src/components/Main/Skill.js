import React from 'react';

const Skill = () => {
    return (
        <div class="hero-content flex-col lg:flex-row mt-20">
            <div className='w-96'>
                <p class="text-blue-500 font-bold">My Skills...</p>
                <h1 class="text-3xl font-bold my-4">Wildlife Photography, ReactJS, JavaScript, MongoDB, NodeJS </h1>
                <button class="underline decoration-1 underline-offset-8 hover:bg-slate-900 p-1 hover:translate-x-0.5 my-4">My Photography</button>
            </div>
            <div className='w-96'>
                <p className='text-zinc-500'>
                    Over the past 1 and half years, as a developer, I have designed and launched customized, responsive websites etc using React and MongoDB. I have also added firebase for authentication login and use heroku to connect back-end servers. I use Bootstrap5, Tailwind ( DaisyUI ), Toastify to make this website more attractive and easy to customizable.
                </p>

            </div>
        </div>
    );
};

export default Skill;