import React, { Fragment } from 'react'
import Wizard from '../wizard/Wizard'
import Header from '../Header'
import TotalSongs from '../wizard/steps/TotalSongs'
import SetMood from '../wizard/steps/SetMood'
import AddArtists from '../wizard/steps/AddArtists'
import LinkSpotify from '../wizard/steps/LinkSpotify'
import GenerateNewPlaylist from '../wizard/steps/GenerateNewPlaylist'
import ModelViewer from '../ModelViewer'

export default function New() {

    const configuration = {
        activeIndex: 0,
        items : [
            {
                title: 'Total Songs',
                icon: '',
                step: <TotalSongs />,
                inspectorComponent: <ModelViewer model="potions"/>,
                skippable: false
            },
            {
                title: 'Set Mood',
                icon: '',
                step: <SetMood />,
                inspectorComponent: <ModelViewer model="shoes"/>,
                skippable: false
            },
            {
                title: 'Add Artists',
                icon: '',
                step: <AddArtists />,
                inspectorComponent: <ModelViewer model="scissors"/>,
                skippable: false
            },
            {
                title: 'Link Spotify',
                icon: '',
                step: <LinkSpotify />,
                inspectorComponent: <ModelViewer model="mirror"/>,
                skippable: false
            },
            {
                title: 'Create Mix',
                icon: '',
                step: <GenerateNewPlaylist />,
                inspectorComponent: <ModelViewer model="shazam"/>,
                skippable: false
            }
        ]
    }

    return (
        <Fragment>
            <Header title="PW - Create New" />
            <main>
                <Wizard configuration={ configuration } />
            </main>
        </Fragment>
    )
}