import React, { Fragment } from 'react'
import Wizard from '../wizard/Wizard'
import Header from '../Header'
import TotalSongs from '../wizard/steps/TotalSongs'
import SetGenre from '../wizard/steps/SetGenre'
import SetVibe from '../wizard/steps/SetVibe'
import AddArtists from '../wizard/steps/AddArtists'
import LinkSpotify from '../wizard/steps/LinkSpotify'
import GenerateNewPlaylist from '../wizard/steps/GenerateNewPlaylist'
import ModelViewer from '../ModelViewer'

export default function New() {
    return (
        <Fragment>
            <Header title="PW - Create New" />
            <main>
                <Wizard activeIndex={ 0 }>
                    {
                        [
                            {
                                title: 'Total Songs',
                                icon: '',
                                step: TotalSongs,
                                inspector: <ModelViewer model="potions"/>,
                                skippable: false
                            },
                            {
                                title: 'Set Genre',
                                icon: '',
                                step: SetGenre,
                                inspector: <ModelViewer model="shoes"/>,
                                skippable: false
                            },
                            {
                                title: 'Set Vibe',
                                icon: '',
                                step: SetVibe,
                                inspector: <ModelViewer model="spices"/>,
                                skippable: false
                            },
                            {
                                title: 'Add Artists',
                                icon: '',
                                step: AddArtists,
                                inspector: <ModelViewer model="scissors"/>,
                                skippable: false
                            },
                            {
                                title: 'Link Spotify',
                                icon: '',
                                step: LinkSpotify,
                                inspector: <ModelViewer model="mirror"/>,
                                skippable: false
                            },
                            {
                                title: 'Create Mix',
                                icon: '',
                                step: GenerateNewPlaylist,
                                inspector: <ModelViewer model="shazam"/>,
                                skippable: false
                            }
                        ]
                    }
                </Wizard>
            </main>
        </Fragment>
    )
}