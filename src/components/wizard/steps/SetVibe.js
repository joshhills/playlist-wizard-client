import React, { Fragment } from 'react'
import PillSelect from '../../pill-select/PillSelect'
import vibes from '../../../config/vibes.json'

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
            <PillSelect name="vibes" multi="true" handleChange={ props.handleValueChange } formValues={ props.formValues }>
                {{
                    options: vibes.map(v => { return { value: v.id, label: v.label } })
                }}
            </PillSelect>
        </Fragment>
    )
}