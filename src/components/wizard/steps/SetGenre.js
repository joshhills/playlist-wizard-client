import React, { Fragment } from 'react'
import PillSelect from '../../pill-select/PillSelect'

export default function SetGenre(props) {
    return (
        <Fragment>
            <p>
                <em>
                    The wizard invites you to join a ceremonial dance.
                </em>
            </p>
            <PillSelect
                title="Choose up to two genres..."
                name="genres"
                multi={ true }
                max={ 2 }
                handleChange={ props.handleValueChange }>
                {{
                    options: [
                        {
                            value: 0,
                            label: 'Rock'
                        },
                        {
                            value: 1,
                            label: 'Rap'
                        },
                        {
                            value: 2,
                            label: 'Pop'
                        }
                    ]
                }}
            </PillSelect>
        </Fragment>
    )
}