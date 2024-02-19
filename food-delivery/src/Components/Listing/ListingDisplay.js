import React from "react";
import {Link} from "react-router-dom"
import './listing.css'

const ListingDisplay = (props) =>{

    

    const renderData =({listData}) =>{
        console.log("inside render listing display")
        if(listData){
            console.log(listData)
            if(listData.length){
                console.log("inside if")
                return listData.map((item) => {
                    return(
                        <div className='item' key={item._id}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={item.restaurant_thumb} className="Image"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className='labelDiv'>
                                    </div>

                                    <div className='labelDiv'>
                                        {item.mealTypes.map((mealtype, index) => (
                                            <span key={index} className='label label-warning'>
                                                {mealtype.mealtype_name}
                                            </span>
                                        ))} 
                                    </div>

                                    <div className='labelDiv'>
                                        {item.cuisines.map((cuisine, index) => (
                                            <span key={index} className='label label-warning'>
                                                {cuisine.cuisine_name}
                                            </span>
                                        ))} 
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            else{
                return <h1>No Data Found</h1>
            }

        }else{
            return(
                <div>
                    <h2>Loading....</h2>
                    <img src="./images/loader.gif" alt="loader"/>
                </div>
            )
        }

    }

    return(
        <div id = "content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay