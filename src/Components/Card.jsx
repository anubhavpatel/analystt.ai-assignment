import React, { useState } from 'react'
import '../Style/Card.css'
const Card = ({id,name,email,address, company,phone,username,website}) => {
  const [show, setShow] = useState(false);
  return (
    <div className='card-c'>
        <div className='card-ca'>
        <div className="name">
         
       <p>{name}</p>
          </div>
        <div className="contact">
         <h4>CONTACT</h4>
         <div ><p>{email}</p></div>
        </div>
        <div className="city">
            <h4>CITY</h4>
            <div><p>{address.street}</p></div>
        </div>
        <div className="state">
            <h4>STATE</h4>
            <div><p>{address.city}</p></div>
        </div>
        <div className="button">
           <button className='details' onClick={()=> setShow(!show)}>{show === false ? "View Detailes" : "Hide Detailes"}</button>
        </div>
        </div>
        { show &&
        <div className="card-cb">
        <div className="des">
         <h3>Description</h3>
           <p>{company.catchPhrase}</p>  
        </div>
        <div className="inf">
          <div className="inf1">
          <div className='inf-d'>
            <h5>UserName</h5>
            <div><p>{username}</p></div>
          </div>
          <div className='inf-d'>
            <h5>Website</h5>
            <div><p>{website}</p></div>
          </div>
          <div className='inf-d'>
            <h5>Email</h5>
            <div><p>{email}</p></div>
          </div>
          <div className='inf-d'>
            <h5>Phone</h5>
            <div><p>{phone}</p></div>
          </div>
          
          </div>
          <div className="inf2">
          <div className='inf-d'>
            <h5>Address</h5>
            <div><p>{address.street}{","}{address.suite}</p></div>
          </div>
          <div className='inf-d'>
            <h5>City</h5>
            <div><p>{address.street}</p></div>
          </div>
          <div className='inf-d'>
            <h5>State</h5>
            <div><p>{address.city}</p></div>
          </div>
          <div className='inf-d'>
            <h5>Zipcode</h5>
            <div><p>{address.zipcode}</p></div>
          </div>
          </div>
        </div>
      </div> }
        
    </div>
  )
}

export default Card