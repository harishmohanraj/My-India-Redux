import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render () {
    return (
      <header className='bs-docs-nav navbar navbar-static-top'>
        <AppBar
          title='My India Report Card'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose}>
            <IndexLink to='/' activeClassName='route--active' />
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/crime-in-states' activeClassName='route--active'>
              Crime in States
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/accident-in-states' activeClassName='route--active'>
              Accident in States
            </Link>
          </MenuItem>
        </Drawer>
      </header>
    )
  }

}
