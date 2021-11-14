import React, { Component } from 'react'

export default class StudentClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fnm: "No First Name",
            lnm: "No Last Name"
        }

       //this.readFirstName = this.readFirstName.bind(this)
    }
    
    sayHello(){
        alert("Hello, Pritesh")
    }

    // readFirstName = (event) => {
    //     //console.log(event.target.value)
    //     this.setState({fnm: event.target.value})
    // }

    // readLastName = (event) => {
    //     this.setState({lnm: event.target.value})
    // }

    readData = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault()
        alert("Submit")
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <h4>{this.state.fnm} - {this.state.lnm}</h4>
                <form onSubmit={this.submitData}>
                    <input name="fnm" onChange={this.readData} placeholder="Enter First Name" type="text" />
                    <input name="lnm" onChange={this.readData} placeholder="Enter Last Name" type="text" />
                    <input type="submit" value="Submit"/>
                </form>
                <br/>
                <button onClick={this.sayHello}>Say Hello</button>
                <button onClick={() => {
                    alert("welcome")
                }}>Click Me!!!</button>
            </div>
        )
    }
}
