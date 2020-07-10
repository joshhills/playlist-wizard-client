import React from 'react'
import { Link } from 'react-router-dom'

export default function Splash() {
    return (
        <main>
            <h2>
                Generate free Spotify playlists magically
            </h2>
            <p>
                A quest! The wizard is creating a musical potion in his cauldron.
                Help him out by adding some ingredients to the mix from scratch,
                or use the scrying orb to pluck them from your past...
            </p>
            {/* <Link to="/rewind">Monthly Rewind</Link> */}
            <Link to="/new">
                Create New
            </Link>
        </main>
    )
}