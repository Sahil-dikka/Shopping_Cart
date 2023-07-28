import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
;
import { useSelector } from 'react-redux';
//import logo from '../../public/lgog/logo.jpg';
const Navbar = () => {

    const {cart} = useSelector( (state) => state)
  return (
    <div >

        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            
        <NavLink to="/">
            <div className='ml-5'>
            <img src="../logo.jpg" className="h-14 rounded-full"/>
            </div>
        </NavLink>


            <div className='text-slate-100 flex items-center font-medium mr-5 space-x-6'>
            
            <div>
                <NavLink to="/">
                    <p>Home</p>
                    
                </NavLink>
            </div>

            <div className='relative'>
                <NavLink to="/cart">
                    <FaShoppingCart className='text-2xl'/>
                    {cart.length > 0 &&
                        <span
                        className='absolute -top-1 -right-
                        bg-green-600 text-xs w-5 h-5 flex justify-center
                        items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                    } 
                </NavLink>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar