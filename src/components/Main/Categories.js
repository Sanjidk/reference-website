import React from 'react';

const Categories = () => {
    return (
        <div className='bg-back-pic bg-no-repeat bg-cover'>
            <div className='max-w-5xl mx-auto my-4'>
                <h1 className='text-4xl font-bold lg:mt-28 mb-8'>  Categories <span className='text-3xl text-blue-400'> +</span> </h1>
                <div className='grid grid-cols-3 gap-8'>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Landscape Photography</h1>
                        <h3 className='my-2 font-serif'>Good Camera</h3>
                        <h3 className='my-2 font-serif'>Good Lighting</h3>
                        <h3 className='my-2 font-serif'>Good Lens</h3>
                        <h3 className='my-2 font-serif'>Good Tripod</h3>
                    </div>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Wildlife Photography</h1>
                        <h3 className='my-2 font-serif'>Basics of Manual Exposure</h3>
                        <h3 className='my-2 font-serif'>Focus is on Point</h3>
                        <h3 className='my-2 font-serif'> Meaningful Composition</h3>
                    </div>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Aerial photography</h1>
                        <h3 className='my-2 font-serif'>Good Camera</h3>
                        <h3 className='my-2 font-serif'>Good Lighting</h3>
                        <h3 className='my-2 font-serif'>Shutter Release</h3>
                        <h3 className='my-2 font-serif'> Meaningful Composition</h3>
                    </div>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Fashion  Photography</h1>
                        <h3 className='my-2 font-serif'>Explore and Improve</h3>
                        <h3 className='my-2 font-serif'>Interesting Foreground Element</h3>
                        <h3 className='my-2 font-serif'>Don’t get “frame paralysis”</h3>
                    </div>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Portrait Photography</h1>
                        <h3 className='my-2 font-serif'>Capture Contrast</h3>
                        <h3 className='my-2 font-serif'>Show Scale</h3>
                    </div>
                    <div className=' p-5'>
                        <h1 className='font-bold text-2xl text-green-400 lg:mb-4'> Wedding Photography</h1>
                        <h3 className='my-2 font-serif'>Shoot in RAW</h3>
                        <h3 className='my-2 font-serif'>Play with Filters</h3>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Categories;