import React, { Component } from "react";
class MenuDetails extends Component {
    orderId = [];
    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }
    removeOrder = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
            this.props.finalOrder(this.orderId)
        }
    }
    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return <b key={index}>{item}, &nbsp;</b>
            })
        }
    }
    renderMenu = ({ menudata }) => {
        if (menudata) {
            return menudata.map((item) => {
                return (
                    <div key={item.menu_id}>
                        <div className="row">
                            <div className="col-md-8">
                                <b>{item.menu_id}</b> &nbsp;
                                <img src={item.menu_image} alt={item.menu_name} style={{ width: 80, height: 80 }} />
                                <p> {item.menu_name} - Rs.{item.menu_price} </p>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success font-weight-bold" style={{ fontSize: "20px" }} onClick={() => this.placeOrder(item.menu_id)}>
                                    +
                                </button> &nbsp;
                                <button className="btn btn-danger font-weight-bold" style={{ fontSize: "20px" }} onClick={() => this.removeOrder(item.menu_id)}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12 bg-success px-2 py-2 mb-2">
                    <h4>Item Added</h4>
                    <h4>Item Number {this.renderCart(this.orderId)} Added</h4>
                </div>
                <div className="col-md-12 bg-info px-2 py-2">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDetails




