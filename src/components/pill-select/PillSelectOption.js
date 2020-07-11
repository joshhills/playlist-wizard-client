import React from 'react'

export default function PillSelectOption(props) {
    return (
        <button onClick={ () => props.handleClick(props.value) }>
            { props.children } { props.selected && '*'}
        </button>
    )
}