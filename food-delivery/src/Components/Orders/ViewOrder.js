import React,{Component} from 'react'
import axios from 'axios'
import './placeOrder.css'
import Display from './DisplayOrder'

const dummy_url = 'http://localhost:3322/orders'



class ViewOrder extends Component{

    constructor(){
        super()
        this.state={
            orders : ''
        }
    }

    render(){
        return(
            <Display orderData = {this.state.orders}/>
        )
    }

    componentDidMount(){
        axios.get(dummy_url).then((res) =>{this.setState({orders:res.data})})
    }
}

export default ViewOrder