import axios from "axios";
import React from "react";

const url = "https://zomatoajulypi.herokuapp.com/filter";
class Cusine extends React.Component {

    cuisineFilter = (event) => {
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
            .then((res) => {this.props.restPerCuisine(res.data)})
    }


    render() {
        return (
            <div>
                <center>
                    <h5>cuisine Filter</h5>
                </center>
                <div style={{ marginLeft: '15%' }} onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="" />All
                    </label>
                    <br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1" />North Indian
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2" />South Indian
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3" />Chinese
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4" />Fast Food
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5" />Street Food
                    </label>
                </div>
            </div>
        )
    }

}

export default Cusine