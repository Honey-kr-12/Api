import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App6 = () => {
    let [count, setCount] = useState(1);
    const [data, setData] = useState({
        image: "",
        gender: "",
        firstName: "",
        lastName: "",
        phone: "",
    });
    const getusers = async () => {
        axios.get(`https://randomuser.me/api/?page=${count}&results=3&seed=abc`).then(
            (res) => {
                const resp = res.data.results[0]
                console.log(resp)
                setData({
                    image: resp.picture.large,
                    gender: resp.gender,
                    firstName: resp.name.first,
                    lastName: resp.name.last,
                    phone: resp.phone,
                })
                setCount(count + 1);
            }
        )

    }

  return (
    <div className='main-cont'> 
      <button className='btn-grad' onClick={getusers} >get user :- {count-1}</button>
      {/* <button onClick={handleClick()} ></button> */}
      <div className='container' >
        <img className='image' src={data.image} alt={data.firstName} />
        <div className="next-cont">
        <span className='firstName'>{data.firstName}</span>
        <h3 className='gender'>{data.gender}</h3>
        <h4 className='phone'>{data.phone}</h4>
        </div>
        <span className='lastName' >{data.lastName}</span>
      </div>
    </div>
  )
}

export default App6
