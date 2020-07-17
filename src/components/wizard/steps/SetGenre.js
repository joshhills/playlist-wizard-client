import React, { Fragment } from 'react'
import PillSelect from '../../pill-select/PillSelect'
import genres from '../../../config/genres.json'

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
                handleChange={ props.handleValueChange }
                formValues={ props.formValues }>
                {{
                    options: genres.map(g => { return { value: g, label: `${g[0].toUpperCase()}${g.slice(1)}` } })
                }}
            </PillSelect>
        </Fragment>
    )
}