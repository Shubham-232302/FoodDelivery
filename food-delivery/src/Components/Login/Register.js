import React,{Component} from 'react'
import Header from '../Header'
// const base_url = 'http://3.17.216.66:4000'
// const dummy_url = 'http://localhost:3322/orders'
const url = 'http://3.17.216.66:5000/api/auth/register'

class Register extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'shubham',
            email:'s@gmail.com',
            phone:23768274721,
            password:''
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    register = () =>{

        fetch(url, {method:"POST",
               headers:{
                'accept':"application/json",
                'Content-Type':"application/json"
               },

            body: JSON.stringify(this.state)  })
            .then(this.props.history.push('/'))
    }


    render(){
        return(
            <>
            <Header/>
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className='panel panel-heading'>
                    <h1>Rgister</h1>
                    </div>
                    <div className='panel panel-body'>
                        <div className='row'>
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
                                <label>Password</label>
                                <input className='form-control' name='password' value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={this.register}>Register</button>

                    </div>
                    
                </div>


            </div>
            </>
        )
    }
    
}

export default Register