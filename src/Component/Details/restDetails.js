import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import './details.css';
// import { Link } from 'react-router-dom';
import MenuDetails from './menuDetails.js'

const url = "http://zomatoajulypi.herokuapp.com/details"
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu"

class restDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            details: "",
            menuDetails: "",
            mealId: sessionStorage.getItem('mealId') ? sessionStorage.getItem('mealId') : 1,
            userItem: ""
        }
    }

    addToCart = (data) => {
        this.setState({ userItem: data })
    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        localStorage.setItem("testname", "hussain");

        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
        window.location.reload();

    }

    render() {
        let { details } = this.state
        return (
            <>
                <div className="main d-flex">
                    <div className="titleImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt="image1" />
                        </div>
                    </div>
                    <div className="titleContent">
                        <div className="content">
                            <h2>{details.restaurant_name}</h2>
                            <span className="cfeedback" style={{ fontSize: "14px", color: "green" }}>1723 customers rating is average</span>
                            <h5>old Price <del>Rs. 400</del></h5>
                            <h3>New Price {details.cost}</h3>
                            <h6>Best Taste of Chai with samosa at your Door and DineIn</h6>

                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="im" />
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="mi" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <Tabs>
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h5>{details.restaurant_name}</h5>
                                        <h6>{details.restaurant_name} is the best in that state</h6>
                                    </TabPanel>
                                    <TabPanel>
                                        <h5>{details.address}</h5>
                                        <h6>Phone: {details.contact_number}</h6>
                                    </TabPanel>
                                </Tabs>
                                {/* <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> */}

                                <a href={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</a>

                                <button className="btn btn-success ml-4" onClick={this.proceed}>Proceed</button>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-md-12 mt-5">
                    <center className="mt-5"><h3>Menu</h3></center>
                    <MenuDetails menudata={this.state.menuDetails}

                        finalOrder={(data) => { this.addToCart(data) }} />

                </div>
            </>
        )
    }

    async componentDidMount() {
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`);
        let menuResponse = await axios.get(`${menuUrl}/${restId}`);

        this.setState({ details: response.data[0], menuDetails: menuResponse.data });

    }
}

export default restDetails