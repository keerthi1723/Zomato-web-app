import React, { Component } from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay';
import Cusine from '../Component/Filter/Cusine';
import Cost from '../Component/Filter/Cost';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantList: ''
        }
    }
    setDataPerFilter = (data) => {
        this.setState({ restaurantList: data })
    }

    render() {
        return (
            <>
                <div className="d-flex">
                    <div id="mainListing">
                        <div id="filter">
                            <center><h2>Filters</h2></center>
                            <hr />
                            <Cusine mealId={this.props.match.params.mealId}
                                restPerCuisine={(data) => { this.setDataPerFilter(data) }} />

                            <Cost mealId={this.props.match.params.mealId}
                                restPerCost={(data) => { this.setDataPerFilter(data) }} />
                        </div>

                    </div>
                    <ListingDisplay listData={this.state.restaurantList} />

                </div>
            </>
        )
    }

    componentDidMount() {
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId)
        axios.get(`${url}${mealId}`)
            .then((res) => { this.setState({ restaurantList: res.data }) })
    }
}

export default Listing;