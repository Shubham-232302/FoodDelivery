import React,{Component} from 'react'
import axios from 'axios'

const url = "http://3.17.216.66:4000/filter"

//http://3.17.216.66:4000/filter/1?hcost=1000&lcost=500

class CostFilter extends Component{

    costFilter = (event) =>{
        let mealId = this.props.mealId
        let costValue = event.target.value
        let costUrl = ""
        if (costValue === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costValue.split('-')
            costUrl = `${url}/${mealId}?hcost=${costValue.split('-')[1]}&lcost=${costValue.split('-')[0]}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.resPerCost(res.data)})
    }

    render(){
        return(
            <>
            <center><h3>Cost Filter</h3></center>
            <div style={{margin: '15%'}} onChange={this.costFilter}>
                <label className='radio'>
                    <input type='radio' name="cuisine" value =""/>All
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="0-300"/>0-300
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="301-400"/>301-400
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="401-500"/>401-500
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="501-600"/>501-600
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="601-1000"/>601-1000
                </label>
                <label className='radio'>
                    <input type='radio' name="cuisine" value ="1001-5000"/>1001-5000
                </label>
            </div>
            </>
        )
    }
}

export default CostFilter