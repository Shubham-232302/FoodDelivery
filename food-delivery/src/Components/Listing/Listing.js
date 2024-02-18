import React, {Component} from "react";
import axios from 'axios'

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
                    <div id="filter ">

                    </div>
                </div>
            </div>
            
            
            </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) =>this.setState({reastaurantList:res}))
    }
}

export default Listing