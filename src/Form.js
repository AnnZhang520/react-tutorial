import React, { Component } from '../node_modules/react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name, cannot be empty..." 
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    placeholder="Enter job, cannot be empty..." 
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
