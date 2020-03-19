import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Tableview extends Component {
    render() {
        return (
            <Table size="sm" dark striped bordered responsive hover>
                <thead style={{backgroundColor: 'grey'}}>
                    <tr>
                        <th>Flag</th>
                        <th>Country Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Currency</th>
                        <th>Domain</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.countries.map(country => {
                        console.log(country)
                        return (
                            <tr key={country.name}>
                                <td><img src={country.flag} alt="flag" style={{height: '20px', width: '25px'}}/></td>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                                <td>{country.region}</td>
                                <td>{country.currencies.code} - {country.currencies.symbol}</td>
                                <td>{country.topLevelDomain}</td>
                            </tr>
                        )
                    })}
                </tbody>
        </Table>
        )
    }
}