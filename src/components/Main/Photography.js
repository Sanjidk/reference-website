import React from 'react';
import lanscape1 from '../../img/photography/landscape-one.webp';
import lanscape2 from '../../img/photography/landscape-two.jpg';
import lanscape3 from '../../img/photography/Desert.jpg';

import wild1 from '../../img/photography/wild1.jfif';
import wild2 from '../../img/photography/wild2.jfif';
import wild3 from '../../img/photography/wild3.jfif';
import wild4 from '../../img/photography/wild5.png';
import wild5 from '../../img/photography/wild4.jpg';

const Photography = () => {
    return (
        <div className='max-w-5xl mx-auto px-5'>
            <h1 className='text-4xl font-bold mt-28 mb-8'> Photography <span className='text-3xl text-yellow-400'> ...</span></h1>
            <div class="carousel w-full">

                <div id="item1" class="carousel-item w-full">
                    <div class="grid grid-cols-5 w-full gap-4">
                        <div class="lg:text-5xl col-span-2 text-sky-400 p-4 font-bold">
                            <h1> $ Landscape Photography </h1>
                        </div>
                        <div class="col-span-2">
                            <img src={lanscape1} alt="" />
                        </div>
                        <div class="col-span-1">
                            
                        </div>

                        <div class="col-span-3">
                            <img src={lanscape2} alt="" />
                        </div>
                        <div class="col-span-2">
                            <img src={lanscape3} alt="" />
                        </div>
                    </div>
                </div>


                <div id="item2" class="carousel-item w-full">
                    <div class="grid grid-cols-5 w-full gap-4">
                        
                        <div class="col-span-2">
                            <img src={wild1} alt="" />
                        </div>
                        <div class="col-span-1 shadow-lg">
                            <img src={wild2} alt="" />
                        </div>
                        <div class="lg:text-5xl col-span-2 text-green-400 p-4 font-bold">
                            <h1>$ Wildlife Photography </h1>
                        </div>

                        
                        <div class="col-span-1">
                            <img src={wild3} alt="" />
                        </div>
                        <div class="col-span-2">
                            <img src={wild4} alt="" />
                        </div>
                        <div class="col-span-2">
                            <img src={wild5} alt="" />
                        </div>
 
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default Photography;