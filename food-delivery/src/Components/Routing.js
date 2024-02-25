import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import Listing from './Listing/Listing'
import Details from './Details/Details'
import PlaceOrder from './Orders/PlaceOrder'
import ViewOrder from './Orders/ViewOrder'
import Login from './Login/Login'
import Register from './Login/Register'

const Routing = () =>{
    return(
        <BrowserRouter>
            {/* <Route> */}
                
                <Route exact path ="/" component ={Home}/>
                <Route exact path ="/listing/:mealId" component ={Listing}/>
                <Route exact path ="/details" component ={Details}/>
                <Route path ="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path ="/viewBooking" component={ViewOrder}/>
                <Route exact path ="/login" component ={Login}/>
                <Route exact path ="/register" component ={Register}/>
                <Footer/>
            {/* </Route> */}
        
        </BrowserRouter>
    )
}

export default Routing