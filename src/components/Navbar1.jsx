import React from 'react'
import './Navbar1.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import menuId from '@material-ui/core';
import handleProfileMenuOpen from '@material-ui/utils';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from "@material-ui/core";

const Navbar1 = () => {
  return (
    <div>
        <>
    <nav className="navbar navbar-default navbar-inverse" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <p className="navbar-brand">CollegeGuide</p>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
         
         
        </ul>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
         
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li className="navbar-text"><p >Institute</p></li>
          <li><p className="navbar-text">  Student </p> </li>
          <li>  <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton></li>
              </ul>
      </div>
    </div>
  </nav>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'/>
  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'/>
    
    </>
    </div>
  )
}

export default Navbar1;