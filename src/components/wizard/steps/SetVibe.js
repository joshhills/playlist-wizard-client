import React, { Fragment } from 'react'
import PillSelect from '../../pill-select/PillSelect'

export default function SetVibe(props) {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard examines his spice rack.
                </em>
            </p>
            <p>
                Create a vibe...
            </p>
            <PillSelect name="vibes" multi="true" handleChange={ props.handleValueChange }>
                {{
                    options: [
                        {
                            value: 0,
                            label: 'Digital'
                        },
                        {
                            value: 1,
                            label: 'Acoustic'
                        },
                        {
                            value: 2,
                            label: 'Short'
                        }
                    ]
                }}
            </PillSelect>
        </Fragment>
    )
}