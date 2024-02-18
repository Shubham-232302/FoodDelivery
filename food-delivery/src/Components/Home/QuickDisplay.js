import React from 'react'
import {Link} from 'react-router-dom'
import './quickSearch.css'

const QuickDisplay = (props) =>{

    const listMeal = ({mealData}) =>{
        if (mealData){
            return mealData.map((item)=>{
                return(
                    <Link to={`listing/${item.mealtype_id}`} key={item._id}>
                    <div className="tileContainer">
                        <div className="tileImageComponent">
                            <img src={item.meal_image} alt="lunch"/>
                        </div>
                        <div className="tileComponent">
                            <div className="tileContainer1">
                                <Link to="/"><strong>{item.mealtype}</strong> </Link>
                            </div>
                            <div className="tileContainer2">{item.content}</div>       
                        </div>
                    </div>
                    </Link>

                )
            })
        }
    } 

    return(
        <>
            {listMeal(props)}    
        </>
            )
}


export default QuickDisplay