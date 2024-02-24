import React,{Component} from 'react'
import './placeOrder.css'


class PlaceOrder extends Component{

    constructor(props){
        super(props)
        this.state={
            id:Math.floor(Math.random*1000),
            hotel_name: this.props.match.params.restName,
            name:'shubham',
            email:'s@gmail.com',
            cost:0,
            phone:23768274721,
            address: 'sfhsdklgv  sdkfjdsf',
            menuItem: ''

        }
    }

    handleChange = (event) =>{

    }

    render(){
        return(
            <>
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className='panel panel-heading'>
                    <h1>Your Order from Restaurent {this.state.hotel_name}</h1>
                    </div>
                    <div className='panel panel-body'>
                        <div className='row'>
                            <input type='hidden' name='cost' value={this.state.cost}/>
                            <input type='hidden' name='id' value={this.state.id}/>
                            <input type='hidden' name='hotel_name' value={this.state.hotel_name}/>
                            <div className='form-group col-md-6'>
                                <label>Name</label>
                                <input className='form-control' name='name' value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className='form-group col-md-6'>
                                <label>Email</label>
                                <input className='form-control' name='email' value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className='form-group col-md-6'>
                                <label>Phone</label>
                                <input className='form-control' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className='form-group col-md-6'>
                                <label>Address</label>
                                <input className='form-control' name='address' value={this.state.address} onChange={this.handleChange}/>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h2>Total price of the items is {this.state.cost}</h2>
                                </div>
                            </div>
                            <button className='btn btn-primary'>Place Order</button>
                        </div>

                    </div>
                    
                </div>


            </div>
            </>
        )
    }
}

export default PlaceOrder