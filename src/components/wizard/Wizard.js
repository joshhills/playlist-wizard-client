import React from 'react'
import ProgressBar from './ProgressBar'
import ActiveStepContainer from './ActiveStepContainer'

export default class Wizard extends React.Component {
    
    state = {
        activeIndex: this.props.activeIndex,
        formValues: {}
    }

    handleValueChange = (event) => {
        const eventName = event.target.name
        let eventValue = event.target.value
        const eventType = event.target.type

        if (eventType === 'number') {
            eventValue = +eventValue
        } else if (eventType === 'checkbox') {
            eventValue = event.target.checked
        }

        this.setState(prevState => {
            return {
                formValues: {
                    ...prevState.formValues,
                    [eventName]: eventValue
                }
            }
        })
    }

    handleNext = () => {
        this.setState(prevState => {
            if (prevState.activeIndex !== this.props.children.length - 1) {
                return { 
                    activeIndex: prevState.activeIndex + 1
                } 
            }
        })
    }

    handleBack = () => {
        this.setState(prevState => {
            if (prevState.activeIndex !== 0) {
                return { 
                    activeIndex: prevState.activeIndex - 1
                } 
            }
        })
    }

    handleReset = () => {
        this.setState({
            activeIndex: 0,
            formValues: {}
        })
    }

    render() {
        const activeIndex = this.state.activeIndex
        const numItems = this.props.children.length
        const activeItem = this.props.children[activeIndex]

        return(
            <div>
                <ProgressBar items={ this.props.children }/>
                <ActiveStepContainer
                    index={ activeIndex }
                    max={ numItems }
                    step={ activeItem.step }
                    inspector={ activeItem.inspector }
                    handleNext={ this.handleNext }
                    handleBack={ this.handleBack } 
                    handleReset={ this.handleReset }
                    handleValueChange={ this.handleValueChange }
                    formValues={ this.state.formValues }
                    />
            </div>
        )
    }
}