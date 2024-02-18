import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import Listing from './Listing/Listing'
import Details from './Details/Details'

const Routing = () =>{
    return(
        <BrowserRouter>
            {/* <Route> */}
                <Header/>
                <Route exact path ="/" component ={Home}/>
                <Route exact path ="/listing/:mealId" component ={Listing}/>
                <Route exact path ="/details" component ={Details}/>
                <Footer/>
            {/* </Route> */}
        
        </BrowserRouter>
    )
}

export default Routing