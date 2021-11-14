import React, { Component } from 'react'

export default class DisplayData extends Component {
    names = ["Fred", "Saumya","Pritesh","Elijah"]
    render() {
        return (
            <div>
                {
                    this.names.map(v =>{
                        return(<h3 key={v}>{v}</h3>)
                    
                    })
                    
                }
                <select>
                    <option>Select Name</option>
                    {
                     this.names.map(v =>{
                        return(<option key={v}>{v}</option>)
                    })
                    }
                </select>
            </div>
        )
    }
}
