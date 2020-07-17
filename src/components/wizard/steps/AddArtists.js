import React, { Fragment } from 'react'
import LoginButton from '../../spotify/LoginButton'
import ArtistSearch from '../../spotify/ArtistSearch'
import AuthTokenContext from '../../../AuthTokenContext'

export default class AddArtists extends React.Component {
    static contextType = AuthTokenContext

    render() {
        return (
            <Fragment>
                <p>
                    <em>
                        The wizard holds a lock of hair above the bubbling mixture.
                    </em>
                </p>
                <p>
                    Add some artists?
                </p>
                { this.context && this.context.value ?
                    <ArtistSearch name="artists" max={ 3 } formValues={ this.props.formValues } handleChange={ this.props.handleValueChange } />
                    : <LoginButton /> }
            </Fragment>
        )
    }
}