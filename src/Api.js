import React, { Component } from '../node_modules/react'
import './index.css'

class App extends Component {
    state = {
        data: '',
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            'http://cors-anywhere.herokuapp.com/'

        fetch(url)
            .then(response => response.text())
            .then(response => {
                console.log('typeof response=', typeof (response))
                console.log('response=', response)
                this.setState({
                    data: response,
                })
            })
    }

    render() {
        const { data } = this.state
        const urlTutorial =
            'https://www.taniarascia.com/getting-started-with-react/'
        const elementUrlTutorial = <a href={urlTutorial} >{urlTutorial}</a>;
        return (
            <fieldset>
                <p>This demo is based on {elementUrlTutorial}</p>
                <hr/>
                <p>{data}</p>
            </fieldset>
        )
    }
}

export default App