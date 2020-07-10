import React from 'react'
import Button from '../Button'

export default function ActiveStepContainer(props) {
    return (
        <div>
            <div>
                <h3>
                    Step { props.index + 1 } / { props.max }
                </h3>
                { props.step }
                { props.index > 0 && <Button title="Back" handleClick={ props.handleBack } /> }
                { props.index < props.max - 1 && <Button title="Next" handleClick={ props.handleNext } /> }
                { props.index === props.max - 1 && <Button title="Reset" handleClick={ props.handleReset } />}
            </div>
            <div>
                { props.inspector }
            </div>
        </div>
    )
}