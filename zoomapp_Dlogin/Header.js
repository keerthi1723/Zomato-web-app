import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light mb-2"  style={{backgroundColor : "#FF9900"}}>
          <a className="navbar-brand">Food Delivery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
           aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">Add Restaurants</a>
              </li>
              <li className="nav-item">
                <a href='' className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Post</a>
              </li>
            </ul>


            <ul className="navbar-nav mr-auto d-flex">
            <li className="nav-item ml-5">
              <Link to="/Login">Login </Link>
              </li>
              <li className="nav-item">
              <Link to="/Register"> SignUp </Link>
              </li>
            </ul>
          </div>

        
        </nav>
      </>
    )
  }
}

export default Header
