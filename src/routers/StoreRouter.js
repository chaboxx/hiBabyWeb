import React from 'react';
import { BrowserRouter as Router, Switch ,Route, Link, Redirect} from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { ProductScreen } from '../components/store/ProductScreen';
import { StoreScreen } from '../components/store/StoreScreen';
import { mercaderia } from '../data/merca';
import { getMercaById } from '../selectors/getMercaById';
   

export const StoreRouter = () => {
    
    const {nombre}= mercaderia;
    return (
        
        <div>
        
            <Router>
           <Switch>
            <Route exact path="/store" component={StoreScreen}/>
            <Route exact path="/store/:producto" component={ProductScreen}/>
   
            </Switch> 
            </Router>
        </div>
        
       
    )
}
