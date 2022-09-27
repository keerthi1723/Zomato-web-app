import React from 'react'
// import { Link } from 'react-router-dom'
import "./QuickDisplay.css"

const QuickDisplay = (props) => {
    const listMeal = (mealData) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    // <Link to={`/listing/${item.mealtype_id}`} key={item._id}>

                        <a href={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className='card'>
                            <div className='cardWrapper mt-4 d-flex align-items-center'>
                                <div className="ml-4">
                                    <div className="card-body">
                                        <img src={item.meal_image} alt="img1" />
                                    </div>
                                </div>
                                <div>
                                    <span className="card-text">
                                    {item.mealtype}
                                    </span>
                                    <div className='card-inner'>
                                    {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    // </Link>
                )
            })
        }
    }
    return (
        <>
            {listMeal(props.mealData)}
        </>
    )
}

export default QuickDisplay
