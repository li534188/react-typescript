import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import MenuLayout from './components/layout/menuLayout'
// import Detail from '../detail';


export function BasicRoute(){
    return (
    <HashRouter>
        <Switch>
            <Route path="/home" component={MenuLayout}/>
            <Redirect exact to="/home" from='/' />
            {/* <Route exact path="/detail" component={Detail}/> */}
        </Switch>
    </HashRouter>
    )
}
    
