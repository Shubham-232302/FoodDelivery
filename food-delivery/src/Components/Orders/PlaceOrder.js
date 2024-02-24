import React,{Component} from 'react'
import './placeOrder.css'

const base_url = 'http://3.17.216.66:4000'
const dummy_url = 'http://localhost:3322/orders'

class PlaceOrder extends Component{

    constructor(props){
        super(props)
        this.state={
            id:Math.floor(Math.random()*1000),
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
        this.setState({[event.target.name] : event.target.value})
    }

    placeOrder = () =>{
        console.log(this.state)
        let obj = this.state
        obj.menuItem = sessionStorage.getItem('menu')
        console.log(obj)

        fetch(dummy_url, {method:"POST",
               headers:{
                'accept':"application/json",
                'Content-Type':"application/json"
               },

            body: JSON.stringify(obj)  })
            .then(this.props.history.push('/viewBooking'))
    }

    renderItem = (data) =>{
        if(data){
            return data.map((item, index) =>{
                return(
                    <div className='orderItem' key={index}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>cost: {item.menu_price}</h4>
                    </div>
                )
            })
        }

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
                            {this.renderItem(this.state.menuItem)}
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h2>Total price of the items is {this.state.cost}</h2>
                                </div>
                            </div>
                            <button className='btn btn-primary' onClick={this.placeOrder}>Place Order</button>
                        </div>

                    </div>
                    
                </div>


            </div>
            </>
        )
    }
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        console.log(menuItem)
        let orderId = []
        menuItem.split(',').map((item)=>{
            orderId.push(parseInt(item))
            return ''
        }) 
        console.log(orderId)
        fetch(`${base_url}/menuItem`, {method:'POST', headers: 
                {
                    'accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderId)})
                .then((res) => res.json())
                .then((data)=>{
                    console.log("data1",data)
                    let total = 0
                    data.map((item)=>{
                        total += parseFloat(item.menu_price)
                        return ''
                    })
                    console.log("data------>",data)
                    this.setState({menuItem:data, cost:total})
                })

    }
}

export default PlaceOrder