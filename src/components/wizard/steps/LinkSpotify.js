import React, { Fragment } from 'react'
import LinkSpotifyButton from '../../LinkSpotifyButton'

export default function TotalSongs() {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard holds up a mirror which reflects your younger self.
                </em>
            </p>
            <p>
                Optionally link your Spotify to influence the resultant
                playlist with your listening history
            </p>
            <LinkSpotifyButton />
        </Fragment>
    )
}