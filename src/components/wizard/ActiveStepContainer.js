import React from 'react'
import Button from '../Button'

export default function ActiveStepContainer(props) {
    const ActiveStep = props.step

    return (
        <div>
            <div>
                <h3>
                    Step { props.index + 1 } / { props.max }
                </h3>
                <ActiveStep handleValueChange={ props.handleValueChange } formValues={ props.formValues } />
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