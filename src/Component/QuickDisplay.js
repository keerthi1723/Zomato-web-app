import React from 'react'
// import { Link } from 'react-router-dom'
import "./QuickDisplay.css"

const QuickDisplay = (props) => {
    const listMeal = (mealData) => {
        if (mealData) {
            return mealData.map((item) => {
                return (

                    <a href={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className='mealcard'>
                            <div className='mealcardWrapper mt-4 d-flex align-items-center'>
                                <div className="ml-4">
                                    <div className="mealcard-body">
                                        <img src={item.meal_image} alt="img1" />
                                    </div>
                                </div>
                                <div className='mealWrapper'>
                                    <span className="mealcard-text">
                                        {item.mealtype}
                                    </span>
                                    <div className='mealcard-inner'>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })
        }
    }
    return (
        <div>
            {listMeal(props.mealData)}
        </div>
    )
}

export default QuickDisplay
