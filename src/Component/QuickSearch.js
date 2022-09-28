import React from 'react'
import QuickDisplay from './QuickDisplay'
import "./QuickSearch.css"

const url = "https://zomatoajulypi.herokuapp.com/quicksearch"

class QuickSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: ""
    }
  }
  componentDidMount() {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data })
      }

      )
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <>
        <div className='container-fluid'>
          <div id='quickWrapper'>
            <span className='font mt-4'>
              Quick Display
            </span>
            <span className='meal-text'>
              Find the Hotels By meal Type
            </span>
            <hr />
          </div>
        </div>
        <QuickDisplay mealData={this.state.mealType} />

      </>
    )
  }
}

export default QuickSearch
