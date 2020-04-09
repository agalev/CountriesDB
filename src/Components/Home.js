import React, { Component } from 'react'

export default class Home extends Component {
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
            <div className="container">
                <h1>Learn about different countries!</h1>
                    {this.props.countries.map(country => {
                        return (
                            <img 
                                className="img-thumbnail"
                                key={country.name}
                                src={country.flag}
                                alt="flag"
                                onClick={() => this.handleClick(country)}
                                style={{height: '40px',
                                    width: '50px',
                                    margin: '1%',
                                    padding: '1px'
                            }}/>
                        )
                    })}
            </div>
        )
    }
}