import React, { Component } from 'react'

export default class Gridview extends Component {
    constructor() {
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(props) {
        console.log("CLICKED", props)
    }

    render() {
        return (
<div>~ GRID VIEW ~</div>
        )
    }
}