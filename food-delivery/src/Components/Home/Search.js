import React,{Component} from 'react'
import './search.css'

const base_url = 'http://3.17.216.66:4000'

class Search extends Component{

    constructor(){
        console.log("inside constructor")
        super()
        this.state = {
            location:''
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
                        <select className="select">
                            <option>----select city----</option>
                            {this.renderState(this.state.location)}
                        </select>
                        <select className="select">
                            <option >----select restaurents----</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}
export default Search