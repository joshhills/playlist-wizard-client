import React, { Fragment } from 'react'
import ProgressItem from './ProgressItem'

export default function ProgressBar(props) {
    return (
        <Fragment>
            {
                props.items.map((i, ix) => <ProgressItem key={ix} title={ i.title } icon={ i.icon } />)
            }
        </Fragment>
    )
}