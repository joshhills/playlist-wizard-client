import React, { Fragment } from 'react'

export default function SetMood(props) {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard begins a ceremonial dance. Hesitantly, you begin to join in.
                </em>
            </p>
            <p>
                Pick a vibe
            </p>
            <input
                name="test"
                min="5"
                max="100"
                defaultValue="31"
                type="number"
                placeholder="31"
                value={ props.formValues['test']}
                onChange={ props.handleValueChange } />
        </Fragment>
    )
}