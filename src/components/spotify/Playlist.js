import React from 'react'
import Track from './Track'

export default function Playlist(props) {
    return (
        <div>
            {
                props.tracks.map((t, ix) => <Track key={ t.id } index={ ix } name={ t.name } artists={ t.artists }/>)
            }
        </div>
    )
}