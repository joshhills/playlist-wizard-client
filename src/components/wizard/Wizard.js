import React from 'react'
import ProgressBar from './ProgressBar'
import ActiveStepContainer from './ActiveStepContainer'

export default class Wizard extends React.Component {
    
    state = {
        activeIndex: this.props.configuration.activeIndex,
        items: this.props.configuration.items,
        formValues: {}
    }

    handleValueChange = (event) => {
        const eventName = event.target.name
        const eventValue = event.target.value

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
            if (prevState.activeIndex !== prevState.items.length - 1) {
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
        const numItems = this.state.items.length
        const activeItem = this.state.items[activeIndex]

        return(
            <div>
                <ProgressBar items={ this.state.items }/>
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