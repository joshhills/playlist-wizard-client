import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Splash from './components/pages/Splash'
import Wizard from './components/pages/New'
import NoMatch from './components/pages/NoMatch'
import About from './components/pages/About'

import queryString from "querystring"

import AuthTokenContext from './AuthTokenContext'

export default class App extends React.Component {

    state = {
        authToken: null,
        restoredFromRoute: null
    }

    clearToken = () => {
        this.setState({ authToken: null },
            () => window.localStorage.removeItem('access-token'))
    }

    componentDidMount() {
        let token, state
        const params = queryString.parse(window.location.hash.slice(2))

        if (params.access_token && typeof params.access_token === 'string') {
            token = params.access_token
            state = params.state
            window.localStorage.setItem('access-token', token)
        } else {
            token = window.localStorage.getItem('access-token')
        }

        this.setState({
            authToken: token,
            restoredFromRoute: state
        })
    }
    
    render() {
        return (
            <AuthTokenContext.Provider value={ { value: this.state.authToken, clearValue: this.clearToken } }>
                <Router basename="/">
                    {this.state.restoredFromRoute &&
                        <Redirect to={ this.state.restoredFromRoute }/>}
                    <Switch>
                        <Route exact path="/">
                            <Splash/>
                        </Route>
                        <Route path="/new">
                            <Wizard/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Router>
            </AuthTokenContext.Provider>
        )
    }
}

