import React, { Component } from '../node_modules/react'
import Table from './Table'
import Form from './Form'
import App2 from './Api'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = character => {
        if (!character.name || !character.job){
            return;
        }
        this.setState({ characters: [...this.state.characters, character] })
    }
    render() {
        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
                <App2 />
            </div>
        )
    }
}

export default App