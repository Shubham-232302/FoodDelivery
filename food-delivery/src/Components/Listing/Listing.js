import React, {Component} from "react";
import axios from 'axios'
import ListingDisplay from './ListingDisplay'
import CuisineFilter from '../Filters/CuisineFilter'

import './listing.css'

const base_url = 'http://3.17.216.66:4000'

class Listing extends Component{

    constructor(){
        super()
        this.state={
            'reastaurantList':''
        }
    }
    render(){
        return(
            <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        {/* <hr/> */}
                        <CuisineFilter/>

                    </div>
                    <ListingDisplay listData = {this.state.reastaurantList}/>
                </div>
            </div>
            
            
            </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId
        // axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) =>this.setState({reastaurantList:res.data}))
    }
}

export default Listing