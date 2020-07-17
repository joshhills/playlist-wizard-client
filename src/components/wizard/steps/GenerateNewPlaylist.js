import React, { Fragment } from 'react'
import LoginButton from '../../spotify/LoginButton'
import AuthTokenContext from '../../../AuthTokenContext'
import Playlist from '../../spotify/Playlist'

export default class GenerateNewPlaylist extends React.Component {
    static contextType = AuthTokenContext

    state = {
        addedPlaylist: false,
        recommendations: null
    }

    componentDidMount() {
        if (this.context && this.context.value) {
            this.getRecommendations()
        }
    }

    handleClick = () => {
        
    }

    getRecommendations = () => {

        const limit = this.props.formValues.limit,
            artists = this.props.formValues.artists ? this.props.formValues.artists.map(a => a.id).join(',') : null,
            genres = this.props.formValues.genres ? this.props.formValues.genres.join(',') : null

        // TODO: target_x values from vibes and listening history...
        fetch(`https://api.spotify.com/v1/recommendations?${limit ? `&limit=${limit}` : ''}${artists ? `&seed_artists=${artists}` : ''}${genres ? `&seed_genres=${genres}` : ''}`, {
            headers: {
                'Authorization': `Bearer ${this.context.value}`
            }
        })
        .then(response => {
            if (response.status !== 200) {
                this.context.clearValue()
                return null
            } else {
                return response.json()
            }
        })
        .then(data => {
            if (data && data.tracks) {
                this.setState({
                    recommendations: data.tracks.map(t => {
                        return {
                            id: t.id,
                            name: t.name,
                            artists: t.artists.map(a => {
                                return {
                                    name: a.name
                                }
                            })
                        }
                    })
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <p>
                    <em>
                        The wizard mumbles an incantation, and a breeze picks up about you.
                        With a sudden flash, it's ready! 
                    </em>
                </p>
                { this.context ?
                    this.state.recommendations ? 
                        <div>
                            <Playlist tracks={ this.state.recommendations }/>
                            <p>
                                Add this playlist to your Spotify account?
                            </p>
                            <button onClick={ this.handleClick }>Add Playlist</button>
                        </div>
                        : <p>Brewing...</p>
                    : <div>
                        <p>
                            Log in to generate your Spotify playlist
                        </p>
                        <LoginButton />
                    </div>
                }
            </Fragment>
        )
    }
}