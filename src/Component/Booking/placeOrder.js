import React from "react";
import Header from "../../Header";
import "./placeOrder.css"

const wUrl = "http://zomatoajulypi.herokuapp.com/menuItem";
const order = "http://localhost:9870/posts"

class placeOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: Math.floor(Math.random() * 10000),
            hotel_name: this.props.match.params.restName,
            name: "",
            email: "",
            cost: 0,
            phone: "",
            address: "yrt 45/88",
            menuItem: ""
        }


    }


    renderItem = (data) => {
        if (data) {
            return data.map((item) => {
                return <div className="orderItems" key={item._id}>
                    <img src={item.menu_image} alt={item.menu_name} />
                    <p> {item.menu_name} - Rs.{item.menu_price} </p>
                </div>
            })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {  
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        console.log(obj)
        fetch(order, {
            method: 'POST',
            headers: {
                'accept': "application/json",
                'content-Type': "application/json"
            },  
            body:JSON.stringify(obj)

            
        })
            // .then((res) => res.json())
            // this.props.history.push(`/ViewOrder`)
            // window.location.reload()
            .then(console.log('Order Added'))


            

    }
    payment = () => {
        var options = {
          "key": "rzp_test_e371jEheqKuuRS", 
          "amount": "50000", 
          "currency": "INR",
          "name": "Acme Corp",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "order_id": "order_9A33XWu170gUtm",
          "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
          "prefill": {
            "name": "keerthi",
            "email": "keerthi@gmail.com",
            "contact": "8500619127"
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

    render() {

        if (sessionStorage.getItem('loginStatus') === 'LoggedOut') {
            return (
                <>
                    <Header />
                    <center>
                        <h2>Login first to place an order</h2>
                    </center>
                </>
            )

        }
        // console.log("check", this.state) 
        return (
            <div className="mainPlaceWrapper">
                <div className="row">
                    <div className="container">
                        <div className="panel px-3 py-3">
                            <div className="panel-heading">
                                <h3 className="text-white">Your Order Form Restaurant {this.state.hotel_name}</h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="row">
                                        <input type="hidden"  name="cost" value={this.state.cost} id="hotel"  />
                                        <input type="hidden"   name="id" value={this.state.id} id="hotel1" />
                                        <input type="hidden"  name="hotel_name" value={this.state.hotel_name} id="hotel2" />

                                        <div className="form-group col-md-6">
                                            <label className="text-white">Name</label>
                                            <input className="form-control" name="name" onChange={this.handleChange}
                                                value={this.state.name} id="hotel3" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Email</label>
                                            <input className="form-control" name="email" onChange={this.handleChange}
                                                value={this.state.email} id="hotel4" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Phone</label>
                                            <input className="form-control" name="phone" onChange={this.handleChange}
                                                value={this.state.phone} id="hotel5" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Address</label>
                                            <input className="form-control" name="address" onChange={this.handleChange}
                                                value={this.state.address} id="hotel6" />
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                        {this.renderItem(this.state.menuItem)}
                        <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Total Price is Rs: {this.state.cost}</h2>
                        </div>
                    </div>

                    <button className="btn btn-success"   onClick={this.payment} type="submit">CheckOut</button>
                    
                    {/* <button className="btn btn-success" onClick={this.handleClick}  onClick={this.payment} type="submit">CheckOut</button> */}
                </div>

                    </div>
                   
                </div>
               
            </div>
        )
    }


    // calling a api
    async componentDidMount() {
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(wUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + Number(item.menu_price);
                    return 'ok'
                })
                this.setState({ menuItem: data, cost: totalPrice })
            }
            )


        let sessionData = sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',') : []

        this.setState({

            name: sessionData ? sessionData[0] : "",
            email: sessionData ? sessionData[1] : "",
            phone: sessionData ? sessionData[2] : "",
        })

    }
}

export default placeOrder