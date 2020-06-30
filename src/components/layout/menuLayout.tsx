/**
 * 主菜单
 */

import React from 'react'
import './menuLayout.scss'
import {HeaderCard} from '../headerCard/index'
import {Route, Switch} from 'react-router-dom';
import Home from '../home/index'
import ResolveDiv from '../ResolveDiv'

export default class MenuLayout extends React.PureComponent {

    render() {
        return (
            <div className="page">
                <header className="header">
                    <HeaderCard />
		        </header>
                <section className="content">
                     <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/home/page" component={ResolveDiv}/>
                        
                    </Switch>
                </section>
                <footer className="footer">
                    <nav className="foot-nav">
                        <b>首页</b>
                        <b>其他</b>
                        <b>中心</b>
                    </nav>
                </footer>
            </div>
        )
    }
}