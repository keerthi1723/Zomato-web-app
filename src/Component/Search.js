import React from 'react'

const locationUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: "",
      restData: "",
    }
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option key={item.state_id} value={item.state_id}> {item.state}</option>
        )
      })

    }

  }
  renderRest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option key={item.restaurant_id} value={item.restaurant_id}> {item.restaurant_name} | {item.address}</option>
        )
      })

    }

  }

  handleCity = (event) => {
    const state_id = event.target.value;
    fetch(`${restUrl}${state_id}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restData: data })
        console.log(data)
      })
  }

  render() {
    const myStyle = {
      backgroundImage: "url('https://i.ibb.co/NVQxPB6/food-Wallpaper.png')",
      height: '400px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <>
        <div style={myStyle}>
          <h1 className='foodText text-center pt-5'>Food Delivery</h1>
          <h5 className='foodInnerText text-center pt-3'>Discover the Best Food in Our Location</h5>
          {/* //dropdown */}
          <div id='dropdown' className='d-flex justify-content-center mt-5 '>
            <select onChange={this.handleCity} >
              <option>---  Location Choose  ---</option>
              {this.renderCity(this.state.location)}
            </select>
            <select id='restDropdown'>
              <option>---  Restaurant Choose  ---</option>
              {this.renderRest(this.state.restData)}
            </select>

          </div>
        </div>
      </>
    )
  }

  // api calling
  componentDidMount() {
    fetch(locationUrl, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ location: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default Search
