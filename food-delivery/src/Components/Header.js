import React, {Component} from 'react'
import './header.css'
import {Link, withRouter} from 'react-router-dom'



const url = 'http://3.17.216.66:5000/api/auth/userinfo'

class Header extends Component{

    constructor(props){
        super(props)
        this.state={
            userData:''
        }
    }

    dict = {
        divTemp:{
            float:'left'        
        }
    }


    handleLogout = () =>{
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus', 'loggedOut')
        this.setState({
            userData:''
        })
        this.props.history.push('/')
    }

    conditionalHeader =() =>{

        if(this.state.userData.name){
            let data = this.state.userData
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            sessionStorage.setItem('loginStatus','loggedIn')
            return(
                <>
                    <Link to ="/" className ="btn btn-success">
                        <span className='glyphicon glyphicon-user'>Hi {data.name}</span>
                    </Link>&nbsp
                    <button onClick={this.handleLogout} className ="btn btn-danger">
                        <span className='glyphicon glyphicon-log-out'>Logout</span>
                    </button>
                </>
            )

        }else{
            return(
            <>
                    <Link to ="/login" className ="btn btn-success">
                        <span className='glyphicon glyphicon-log-in'>Login</span>
                    </Link>&nbsp
                    <Link to ="/register" className ="btn btn-danger">
                        <span className='glyphicon glyphicon-user'>Register</span>
                    </Link>
                    </>)
        }

    }

    render(){
        return(
            <>
            <header>
                <div id="brand">
                    Food Delivery
                </div>
                <div>
                    <Link to="/"> <button className='btn btn-success' style={this.dict.divTemp}>Home</button>
                    </Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </header>
            </>
        )

    }
    componentDidMount(){
        fetch(url,
            {method:"GET",
        headers:{'x-access-token':sessionStorage.getItem('ltk')}})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header)