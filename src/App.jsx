import React, { useState } from 'react'
import './App.css'
import useFetch from './useFetch'


function App() {
  const data = useFetch('https://dummyjson.com/users')
  const [user,setUser]=useState()
  const [color, setColor] = useState()
  const [image, setImage] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [gender, setGender] = useState()
  const [username, setUsername] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [birthday, setBirthday] = useState()
  const [bloodGroup, setBloodGroup] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [postalCode, setPostalCode] = useState()
  const [state, setState] = useState()

  const fetchUser = () => {
    const user = data.users[Math.floor(Math.random() * data.users.length + 1)]
    var color = Math.floor(Math.random() * 16777215).toString(16);
    setUser(true)
    setColor(color)
    setImage(user.image)
    setFname(user.firstName)
    setLname(user.lastName)
    setGender(user.gender)
    setUsername(user.username)
    setAge(user.age)
    setEmail(user.email)
    setPhone(user.phone)
    setBirthday(user.birthDate)
    setBloodGroup(user.bloodGroup)
    setHeight(user.height)
    setWeight(user.weight)
    setAddress(user.address.address)
    setCity(user.address.city)
    setPostalCode(user.address.postalCode)
    setState(user.address.state)
  }
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-itmes-center' style={{ height: '100vh'}}>
        <div>
          <h1 className='text-center mt-5' style={{fontFamily:'quicksand'}}>Random User Generator</h1>
          {user&&<div style={{ width: '900px',backgroundColor:`#${color}`,fontFamily:'nunito'}} className='text-center align-itmes-center  border rounded p-2 mt-4 shadow'>
            <div className='text-center'><img src={image} alt="" className='rounded-circle border z-2' style={{ width: '100px', height: '100px' }} /></div>
            <div className='p-2'>
              <h4 className="text-center">{fname} {lname}</h4>
              <p className='text-center'>{gender}</p>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Username:</span> {username}</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>Age:</span> {age}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Email:</span> {email}</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>Phone:</span> {phone}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Birthday:</span> {birthday}</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>Blood Group:</span> {bloodGroup}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Height:</span> {height} Cm</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>Weight:</span> {weight} Kg</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Address:</span> {address}</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>City:</span> {city}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p><span className='fw-bold'>Postal Code:</span> {postalCode}</p>
                </div>
                <div className="col-6">
                  <p><span className='fw-bold'>State:</span> {state}</p>
                </div>
              </div>
            </div>
          </div>}
          <div className='d-flex justify-content-center mt-3'> <button className='btn btn-primary' onClick={fetchUser}>Get New User</button></div>
        </div>
      </div>
    </>
  )
}

export default App
