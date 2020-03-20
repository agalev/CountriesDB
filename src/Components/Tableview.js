import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Tableview extends Component {
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
            <Table size="sm" dark striped bordered responsive hover>
                <thead style={{backgroundColor: 'grey'}}>
                    <tr>
                        <th>Flag</th>
                        <th>Country Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Area</th>
                        <th>Domain</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.countries.map(country => {
                        return (
                            <tr key={country.name} onClick={() => this.handleClick(country.name)}>
                                <td><img src={country.flag} alt="flag" style={{height: '20px', width: '25px'}}/></td>
                                <td>{country.name}</td>
                                <td>{(country.capital) ? country.capital : 'N/A'}</td>
                                <td>{country.region}</td>
                                <td>{country.population.toLocaleString('en-US')}</td>
                                <td>{(country.area) ? country.area.toLocaleString('en-US') + ' km²' : 'N/A'}</td>
                                <td>{country.topLevelDomain}</td>
                            </tr>
                        )
                    })}
                </tbody>
        </Table>
        )
    }
}