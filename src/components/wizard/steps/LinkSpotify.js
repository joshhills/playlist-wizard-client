import React, { Fragment } from 'react'
import LoginButton from '../../spotify/LoginButton'

import AuthTokenContext from '../../../AuthTokenContext'

export default class TotalSongs extends React.Component {
    static contextType = AuthTokenContext

    render() {

        return (
            <Fragment>
                <p>
                    <em>
                        The wizard holds up a mirror which reflects your younger self.
                    </em>
                </p>
                <label>
                    Use your Spotify history to influence the resultant
                    playlist?
                    
                    { this.context ?
                        <input
                            name="useHistory"
                            type="checkbox"
                            checked={ this.props.formValues['useHistory'] || false }
                            onChange={ this.props.handleValueChange } /> 
                        : <LoginButton /> }
                    
                </label>
            </Fragment>
        )
    }
}