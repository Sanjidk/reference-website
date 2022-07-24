import React from 'react';
import logo from '../../img/phLogo.png';

const Navbar = () => {
    return (

        <div className='navbar bg-black sticky top-0 mt-0 border-0' >
            <div className=''>
            <img width='150px' src={logo} alt="" />
            </div>            
        </div>
    );
};

export default Navbar;