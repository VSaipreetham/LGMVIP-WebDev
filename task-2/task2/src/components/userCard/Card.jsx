import React from 'react'
import classes from './Card.module.css'

const Card = ({details}) => {
    console.log(details)
    return (
        <div className={classes.card__container}>
            <img src={details.avatar} 
            alt={details.full_name} 
            className={classes.img} />
            <div className={classes.user__info}>
                <h3>User Info</h3>
                <hr/>
                <div className={classes.det}>
                    <p>firstName: {details.first_name}</p>
                    <p>lastName: {details.last_name}</p>
                    <p>email: {details.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
