import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AboutScreen } from '../components/about/AboutScreen'
import { HomeScreen} from '../components/hiBaby/HomeScreen'
import { Navbar } from '../components/navbar/Navbar'
import { ProductScreen } from '../components/store/ProductScreen'
import { StoreScreen } from '../components/store/StoreScreen'
import { StoreRouter } from './StoreRouter'

export const AppRouter = () => {
    return (
        
        
        <div>
        <Router>
        <Navbar/>
            
            
            <Switch>
                
                <Route exact path="/" component={HomeScreen} />
                <Route path="/store" component={StoreRouter} />

                <Route path="/about" component={AboutScreen} />
                
                
                <Redirect to="/"/>
            
            
            </Switch>   
        
        
        </Router>
        </div>
        
        
    )
}
