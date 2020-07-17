import React from 'react'

export default function ArtistSearchResult(props) {
    return (
        <div onClick={ props.handleClick }>
            { props.data.image && <img src={ props.data.image } alt={ props.data.name } />}
            <p>{ props.data.name }</p>
            { props.handleAdd && <button onClick={ () => props.handleAdd(props.data) } disabled={ props.disabled }>Add</button>}
            { props.handleRemove && <button onClick={ () => props.handleRemove(props.data) }>Remove</button>}
        </div>
    )
}