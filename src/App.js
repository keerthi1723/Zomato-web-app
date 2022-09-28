import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Home from "./Component/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import Listing from "./Listing/ListingApi";
import Details from "./Component/Details/restDetails";
import placeOrder from "./Component/Booking/placeOrder"
import ViewOrder from './Component/Booking/ViewOrder';
import Register from './Login/Register';
import Login from './Login/Login'
import Test from './Component/Test';
// import Profile from './Login/Profile'
// import User from './Login/User'
import history from './history'

const App = () => {
  return (
    <>
      <BrowserRouter  >
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route path="/Listing/:mealId" component={Listing} />
        <Route path="/Details" component={Details} />
        <Route  path="/placeOrder/:restName" component={placeOrder} />
        <Route  path="/ViewOrder" component={ViewOrder} />
         <Route  path="/Register" component={Register} />
        <Route  path="/Login" component={Login} />
        {/* <Route  path="/Profile" component={Profile} />
        <Route  path="/User" component={User} />  */}
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App


