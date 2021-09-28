import React from 'react'
import Card from '../userCard/Card'

import classes from './Cards.module.css'

const Cards = ({details}) => {
    return (
        <div className={classes.cards__container}>
            {details.map((ele)=>(
                <Card details={ele} key={ele.id}/>
            ))}
        </div>
    )
}

export default Cards
