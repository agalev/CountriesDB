import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap'

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
            <div style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: '15px'}}>
                {this.props.countries.map(country => {
                    return (
                        <div
                        key={country.name}
                        style={{display: 'inline-block', margin: '1%', width: '30%', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: '5px'}}
                        >
                        <Card key={country.name} style={{textAlign: 'center', height: '100%'}}>
                            <CardImg src={country.flag} alt="flag" style={{width: '100%'}}/>
                            <CardBody>
                                <CardTitle style={{backgroundColor: 'rgba(45, 45, 45, 0.1)', padding: '10px', fontSize: '1em'}}><strong>{country.name}</strong></CardTitle>
                                <CardSubtitle><strong>Capital: {(country.capital) ? country.capital : 'N/A'}</strong></CardSubtitle>
                                <CardText>
                                    <strong>{country.name}</strong> is located in <strong>{country.region}</strong>. 
                                    The population of the country is estimated at <strong>{country.population.toLocaleString('en-US')}</strong>. 
                                    <strong>Area: {(country.area) ? country.area.toLocaleString('en-US') + ' km²' : 'N/A'}</strong>
                                </CardText>
                            </CardBody>
                        </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}