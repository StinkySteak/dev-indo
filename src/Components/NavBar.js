import React from 'react'
import './NavBar.css'
import { HashLink as Link } from 'react-router-hash-link';
import { GrAddCircle } from 'react-icons/gr';
import { IconContext } from "react-icons";
import Button from './Button';
import Login from '../Pages/Login';

function NavBar() {
    
        

    return (
        <div className='navbar flex-center'>
            <div className='navbar-left flex-left'>
                <div className='navbar-link'>
                    <Button
                        linkTo={'/'}
                        text='Home'
                    />
                </div>
                <div className='navbar-link'>
                    <Button
                        linkTo={'/rural'}
                        text='Rurals'
                    />
                </div>
                <div className='navbar-link'>
                    <Button
                        linkTo={'/voting'}
                        text='Voting'
                    />
                </div>
            </div>
            <div className='navbar-right flex-right'>
                <div className='navbar-link'>
                    <IconContext.Provider value={{ size: '28px' }}>
                        <Link to={'/add'}>
                            <GrAddCircle />
                        </Link>
                    </IconContext.Provider>
                </div>
                <div className='navbar-link'>
                    <Button
                        linkTo={'/login'}
                        text='Log In'
                        style='outline'
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar