import React from 'react'
import Search from './Search'
import Header from '../Header'
import QuickSearch from './QuickSearch'

const Home = () =>{
    return(
        <div>
            <Header/>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home