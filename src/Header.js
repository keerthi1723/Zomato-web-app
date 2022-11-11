import React from 'react'
import "./Header.css"


const uUrl = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: "",
    }
  }

  handleLogout = () => {
    sessionStorage.removeItem('userInfo');
    sessionStorage.setItem('LogStatus', 'LoggedOut ');
    sessionStorage.removeItem('ltk');
    this.setState({ userData: '' });
    this.props.history.push('/')
  }
  payment = () => {
    var options = {
      "key": "rzp_test_e371jEheqKuuRS", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 =   new window.Razorpay(options);
    rzp1.open();

  }
  conditionerHeader = () => {
    if (sessionStorage.getItem('ltk') !== null) {
      let data = this.state.userData;
      console.log("ppp", data)
      return (
        <>
          <a href='/' className='btn btn-success mr-3' type='button'>Hi {data.name}</a>

          <button className='btn btn-danger' type='button' onClick={this.handleLogout}>
            Logout
          </button>
        </>
      )
    } else {
      return (
        <>
          <p  onClick={this.payment} className="nav-link  mr-2">payment</p>
          <a href='/Login' className="nav-link  mr-2">Log In</a>
          <a href='/Register' className="nav-link">Sign Up</a>
        </>
      )



    }
  }

  render() {
    return (
      <div className="header-banner">
        <nav className="navbar navbar-expand-lg nav-banner">
          <a href="/" className="navbar-brand">Foodpanda</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href='/' className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Contact</a>
              </li>

            </ul>
            {this.conditionerHeader()}

          </div>


        </nav>
      </div>
    )
  }
  componentDidMount() {
    if (sessionStorage.getItem('ltk') !== null) {

      fetch(uUrl, {
        method: 'GET',
        headers: {
          'x-access-token': sessionStorage.getItem('ltk')
        }
      })

        .then((res) => res.json())
        .then((data) => {
          // console.log("userinfo", data)
          this.setState({ userData: data })
          let outputArray = [data.name, data.email, data.phone];
          localStorage.setItem('userLoginInfo', JSON.stringify(data))
          sessionStorage.setItem('userInfo', outputArray);
          sessionStorage.setItem('LogStatus', 'LoggedIn');
        })
    }

  }
}

export default Header
