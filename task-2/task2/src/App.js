import React, {useState} from 'react'
import NavBar from './components/navbar/NavBar'
import Spinner from './components/spinner/Spinner'
import classes from './App.module.css'
import Cards from './components/cardsContainer/Cards'

const URL="https://reqres.in/api/users?page=1"

const App = () => {

  const [userDetails, setUserDetails] = useState({})
  const [showLoader,setShowLoader] = useState(false)

  const handleButton=async()=>{
    setShowLoader(true)
    fetch(URL)
    .then((data)=>{
      return data.json()
    })
    .then((ele)=>{
      setUserDetails(ele.data)
      setShowLoader(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <React.Fragment>
      <NavBar/>      
      <div className={classes.body}>
        {showLoader && <Spinner/>}
        <button className={classes.button} onClick={handleButton}>
          Get users
        </button>
        {Object.keys(userDetails).length>0 &&
          <Cards details={userDetails}/>
        }
      </div>
    </React.Fragment>
  )
}

export default App
