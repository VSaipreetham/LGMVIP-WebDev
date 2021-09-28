import React from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.navbar__container}>
            <div className={classes.nav__left}>
                <h2>Random Guys</h2>
            </div>
            <ul className={classes.nav__right}>
                <li className={classes.list_items}>Home</li>
                <li className={classes.list_items}>About us</li>
                <li className={classes.list_items}>Contact us</li>
                <li className={classes.list_items}>Signup</li>
            </ul>
            <div className={classes.hamburger}>
                <div className={classes.h1}></div>
                <div className={classes.h1}></div>
                <div className={classes.h1}></div>
            </div>
        </nav>
    )
}

export default NavBar
