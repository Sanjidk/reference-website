import React from 'react';
import logo from '../../img/logo.png';

const Navbar = () => {
    return (

        <div className='navbar bg-black sticky top-0 border-0 max-w-5xl mx-auto z-10' >
            <div>
            <img width='150px' src={logo} alt="" />
            </div>            
        </div>
    );
};

export default Navbar;