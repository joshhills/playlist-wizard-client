import React from 'react'

export default function Track(props) {
    return (
        <div>
            <p>
                { props.index }: { props.name } by { props.artists.map(a => a.name).join(', ') }
            </p>
        </div>
    )
}