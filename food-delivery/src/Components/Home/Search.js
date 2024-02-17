import React,{Component} from 'react'
import './search.css'

const base_url = 'http://3.17.216.66:4000'

class Search extends Component{

    constructor(){
        console.log("inside constructor")
        super()
        this.state = {
            location:'',
            add:''
        }
    }

    componentDidMount(){
        console.log('inside componentDidMount')
        fetch(`${base_url}/location`, {method:'GET'})
        .then((res)=>
            res.json())
        .then((data)=>{
            console.log(data)
            this.setState({location:data})
        })
        .catch((exc) =>{
            console.log(exc)
        })
    }

    renderState = (data) =>{
        console.log("in render city")
        if (data){
        return data.map((item) =>
        {
            return(
            <option value={item.state_id} key={item.state_id}>{item.state}</option>
            )
        })
    }
    }

    renderAdd = (data) =>{
        console.log(data.restaurant_id)
        if (data){
        return data.map((item) =>
        {
            return(
            <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
            )
        })
    }
    }

    processState = (event) =>{
        console.log(event.target.value)
        fetch(`${base_url}/restaurant?stateId=${event.target.value}`, {method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                add:data
            })
        })
        }



    render(){
        console.log("inside render")
        return(
            <>
                <div id="search">
                    <div id="logo">
                        <span>FD!</span>
                    </div>
                    <div id="heading">
                        <h1>Search Place Near To You</h1>
                    </div>
                    <div id="dropdown">
                        <select className="select" onChange={this.processState}>
                            <option>----select city----</option>
                            {this.renderState(this.state.location)}
                        </select>
                        <select className="select">
                            <option >----select restaurents----</option>
                            {this.renderAdd(this.state.add)}
                        </select>
                        
                    </div>
                </div>
            </>
        )
    }
}
export default Search