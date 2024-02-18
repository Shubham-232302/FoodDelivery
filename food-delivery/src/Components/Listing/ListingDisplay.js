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
                                        <div className="">{item.address}</div>
                                        <div className="">{item.rating}</div>
                                        <div className="">Rs. {item.cost}</div>

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