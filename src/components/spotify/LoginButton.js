import React from 'react'
import { useLocation } from "react-router-dom";

import config from '../../config/spotify.json'

export default function LoginButton(props) {
    // I NEED TO ADD SCOPES AS A PROP
    const { pathname } = useLocation()

    return (
        <a href={`https://accounts.spotify.com/authorize?client_id=${config.clientId}&redirect_uri=${window.location.origin}&response_type=token&state=${encodeURIComponent(pathname)}`}>Spotify Login</a>
    )
}