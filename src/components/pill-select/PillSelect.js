import React from 'react'
import PillSelectOption from './PillSelectOption'

export default class PillSelect extends React.Component {
    
    state = {
        options: this.props.children.options,
        multi: this.props.multi,
        name: this.props.name,
        handleChange: this.props.handleChange,
        value: null
    }

    handleClick = (value) => {
        if (value === this.state.value) {
            value = null
        }

        this.setState({
            value: value
        }, () => {
            this.state.handleChange({
                target: {
                    name: this.state.name,
                    value: this.state.value
                }
            })
        })
    }

    render() {
        return (
            <div>
                { this.state.options.map(
                    o =>
                        <PillSelectOption
                            key={ o.value }
                            value={ o.value }
                            selected={ this.state.value === o.value }
                            handleClick={ this.handleClick }>
                            { o.label }
                        </PillSelectOption>)
                }
            </div>
        )
    }
}