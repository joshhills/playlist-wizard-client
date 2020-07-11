import React, { Fragment } from 'react'

export default function TotalSongs(props) {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard squints at you expectantly, holding a
                    clattering armful of empty glass vials...
                </em>
            </p>
            <p>
                Choose the total number of songs you'd like in your
                playlist
            </p>
            <input
                name="total-songs"
                min="5"
                max="100"
                defaultValue="31"
                type="number"
                placeholder="31"
                value={ props.formValues['total-songs']}
                onChange={ props.handleValueChange } />
        </Fragment>
    )
}