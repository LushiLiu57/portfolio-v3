import react from 'react'
import {useEffect, useState} from 'react'
import { AiOutlineBorder } from 'react-icons/ai'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Nav.css'


function Nav() {
    return (
        <div className='bar'>
            <div className='links'>
                <a style={{color:'red'}}><AiOutlineBorder/></a>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/contactme'> Contact Me </Link>
            </div>
        </div>
        
    )
}

export default Nav