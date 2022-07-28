import React from 'react';
import reward1 from '../../img/photography/Desert.jpg';
import reward2 from '../../img/photography/landscape-one.webp';

const Reward = () => {
    return (
        <div className='max-w-5xl mx-auto px-5'>
            <h1 className='text-5xl font-bold mt-28 mb-8'>  Reward <span className='text-3xl text-blue-400'>+</span> </h1>
            <div class="grid grid-cols-2 w-full gap-4">
                    <img className='rounded-lg' src={reward1} alt="" />
                    <img className='rounded-lg' src={reward2} alt="" />
            </div>
        </div>
    );
};

export default Reward;