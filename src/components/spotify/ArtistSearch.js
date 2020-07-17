import React from 'react'
import DebounceInput from 'react-debounce-input'
import ArtistSearchResult from './ArtistSearchResult'
import AuthTokenContext from '../../AuthTokenContext'

export default class ArtistSearch extends React.Component {

    static contextType = AuthTokenContext

    state = {
        results: [],
        value: this.props.formValues[this.props.name] || null,
        max: this.props.max
    }

    bubbleChange = () => {
        this.props.handleChange({
            target: {
                name: this.props.name,
                value: this.state.value
            }
        })
    }

    onChange = (e) => {
        const term = e.target.value.trim()

        if (term === '') {
            this.setState({ results: [] })
            return
        }
        
        fetch(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=5`,
            {
                headers: {
                    'Authorization': `Bearer ${this.context.value}`
                }
            })
            .then(response => {
                if (response.status !== 200) {
                    this.context.clearValue()
                    return null
                } else {
                    return response.json()
                }
            })
            .then(data => {
                if (data && data.artists) {
                    this.setState({ results: data.artists.items.map(a => {
                        return {
                            id: a.id,
                            name: a.name,
                            image: a.images[0] ? a.images[0].url : null
                        }
                    }) })
                }
            })
    }

    handleAdd = (a) => {
        this.setState((prevState) => {
            return {
                value: prevState.value ? prevState.value.concat(a) : [a]
            }
        }, this.bubbleChange)
    }

    handleRemove = (a) => {
        this.setState((prevState) => {
            return {
                value: prevState.value ? prevState.value.filter(a2 => a2.id !== a.id) : null
            }
        }, this.bubbleChange)
    }

    handleClear = () => {
        this.setState({ value: null }, this.bubbleChange)
    }

    render () {
        return (
            <div>
                <p>{ this.state.value ? this.state.value.length : '0' }{ this.state.max && ` / ${this.state.max}` }</p>
                { this.state.value && this.state.value.length > 0 && <button onClick={ this.handleClear }>Clear</button> }
                <DebounceInput
                    minLength={ 1 }
                    debounceTimeout={ 300 }
                    onChange={ this.onChange }
                    placeholder="Search by artist name..." />
                <div>
                    {
                        this.state.value && this.state.value.map(a => <ArtistSearchResult key={ a.id } data={ a } handleRemove={ this.handleRemove }/>)
                    }
                </div>
                <hr />
                <div>
                    { 
                        this.state.results
                            .filter(a => !this.state.value || !this.state.value.includes(a))
                            .map(a => <ArtistSearchResult key={ a.id } data={ a } handleAdd={ this.handleAdd } disabled={ (!this.state.value && this.state.max === 0) || (this.state.value && this.state.value.length === this.state.max) }/>)
                    }
                </div>
            </div>
        )
    }
}