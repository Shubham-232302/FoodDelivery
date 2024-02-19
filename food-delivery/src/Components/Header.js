import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header =() =>{

    const dict = {
        divTemp:{
            float:'left'        
        }
    }

    return(
        <>
        <header>
            <div id="brand">
                Food Delivery
            </div>
            <div>
                <Link to="/"> <button className='btn btn-success' style={dict.divTemp}>Home</button>
                </Link>
            </div>
            <div id="social">
                <Link to ="/" className ="btn btn-success">
                    <span className='glyphicon glyphicon-log-in'>Login</span>
                </Link>&nbsp
                <Link to ="/" className ="btn btn-danger">
                    <span className='glyphicon glyphicon-user'>Register</span>
                </Link>
            </div>
        </header>
        </>
    )
}

export default Header