import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Splash from './components/pages/Splash'
import Wizard from './components/pages/New'
import NoMatch from './components/pages/NoMatch'
import About from './components/pages/About'

export default function App() {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/">
                    <Splash />
                </Route>
                <Route path="/new">
                    <Wizard />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}