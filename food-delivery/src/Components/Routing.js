import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'

const Routing = () =>{
    return(
        <BrowserRouter>
            <Route>
                <Header/>
                <Home/>
                <Footer/>
            </Route>
        
        </BrowserRouter>
    )
}

export default Routing