import React,{Component} from 'react'
import './search.css'

class Search extends Component{

    render(){
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