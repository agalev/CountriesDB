import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap'

export default class Tableview extends Component {



    render() {
        return (
            <Navbar color="dark" dark expand="md" style={{marginBottom: '1%', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: '15px'}}>
                <NavbarBrand href="/">Countries Database</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Tableview">Table View</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Gridview">Grid View</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Sort
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Alphabetically
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    By Region
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    By Population
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    By Area
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Data from RESTCountries API</NavbarText>
                </Collapse>
      </Navbar>
        )
    }
}