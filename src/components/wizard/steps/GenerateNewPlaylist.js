import React, { Fragment } from 'react'
import LinkSpotifyButton from '../../LinkSpotifyButton'

export default function GenerateNewPlaylist() {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard mumbles an incantation, and a breeze picks up about you.
                    With a sudden flash, it's ready! 
                </em>
            </p>
            <p>
                Add your playlist to your Spotify library to listen to it
            </p>
            <LinkSpotifyButton />
        </Fragment>
    )
}