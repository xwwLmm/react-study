import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import {
    BrowserRouter as Router // HashRouter / BrowserRouter
} from "react-router-dom"

import { renderRoutes } from 'react-router-config'

import "./styles.scss"

import RouterLink from './views/RouterLink'
import ContnetRouter from './views/Content/router'

const routes = [...ContnetRouter]

class App extends Component {
    render() {
        return (
            <Router>
                <div className="screen">
                    <div className="slider-container">
                        <RouterLink />
                    </div>
                    <div className="layout">{renderRoutes(routes)}</div>
                </div>
            </Router>
        )
    }
}

export default hot(module)(App)