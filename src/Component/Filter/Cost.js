import axios from "axios";
import React from "react";

const url = "https://zomatoajulypi.herokuapp.com/filter";
class Cusine extends React.Component {

    costFilter = (event) => {
        let mealId = this.props.mealId;
        let cost = (event.target.value).split("-");
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((res) => {this.props.restPerCost(res.data)})
    }


    render() {
        return (
            <div>
                <center>
                    <h5>cuisine Filter</h5>
                </center>
                <div style={{ marginLeft: '15%' }} onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="" />All
                    </label>
                    <br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-300" />100-300
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-600" />301-600
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="601-800" />601-800
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="801-1000" />801-1100
                    </label><br />
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1001-1500" />1001-1500
                    </label>
                </div>
            </div>
        )
    }

}

export default Cusine