import React from 'react'
import PillSelectOption from './PillSelectOption'

export default class PillSelect extends React.Component {
    
    state = {
        title: this.props.title,
        options: this.props.children.options,
        multi: this.props.multi,
        name: this.props.name,
        max: this.props.max,
        handleChange: this.props.handleChange,
        value: this.props.formValues[this.props.name] || null
    }

    handleClick = (value) => {
        let newValue

        if (this.state.multi) {
            if (this.state.value === null) {
                if (this.state.max === 0) {
                    newValue = null
                } else {
                    newValue = [value]
                }
            } else if (this.state.value.includes(value)) {
                newValue = this.state.value.filter(v => v !== value)
                if (newValue.length === 0) {
                    newValue = null
                }
            } else {
                if (this.state.max && this.state.value.length === this.state.max) {
                    return
                } else {
                    newValue = this.state.value.concat(value)
                }
            }
        } else {
            if (value === this.state.value) {
                newValue = null
            } else {
                newValue = value
            }
        }

        this.setState({
            value: newValue
        }, this.bubbleChange)
    }

    isDisabled = (value) => {
        if (this.state.multi && this.state.max) {
            if (this.state.max === 0) {
                return true
            }

            return this.state.value && !this.state.value.includes(value) && this.state.value.length === this.state.max
        } else {
            return false
        }
    }

    reset = () => {
        this.setState({
            value: null
        }, this.bubbleChange)
    }

    bubbleChange = () => {
        this.state.handleChange({
            target: {
                name: this.state.name,
                value: this.state.value
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>
                        { this.state.title && this.state.title }
                    </p>
                    <p>
                        { (this.state.multi && this.state.value && this.state.value.length) || '0' }
                        { this.state.max && `/ ${this.state.max}`}
                        { this.state.multi && this.state.value !== null && <button onClick={ this.reset }>X</button> }
                    </p>
                </div>
                
                { this.state.options.map(
                    o =>
                        <PillSelectOption
                            key={ o.value }
                            value={ o.value }
                            selected={ this.state.value && (this.state.value === o.value || this.state.value.includes(o.value)) }
                            handleClick={ this.handleClick }
                            disabled={ () => this.isDisabled(o.value) }>
                            { o.label }
                        </PillSelectOption>)
                }
            </div>
        )
    }
}