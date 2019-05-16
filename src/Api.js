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
        const url_tutorial =
            'https://www.taniarascia.com/getting-started-with-react/'
        return (
            <fieldset>
                <p>This is a demo follow by </p>
                <a href={url_tutorial} >{url_tutorial}</a>
                <hr/>
                <p>{data}</p>
            </fieldset>
        )
    }
}

export default App