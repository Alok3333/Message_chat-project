import React from 'react'
// import './Avtar.webp';

const Profile = () => {
    const EmpDetails = {
        // img_Url: "Avtar.webp",
        name: "Alok Prajapati",
        email: "alok.p90@gmail.com",
        city: "Banglore",
        phone: 9864344798
    }
  return (
    <div>
      <div className="image">
        {EmpDetails.img_Url}
      </div>
      <div className="emp_name">
        {EmpDetails.name}
      </div>
      <div className="emp_email">
        {EmpDetails.email}
      </div>
      <div className="emp_city">
        {EmpDetails.city}
      </div>
      <div className="emp_contact">
        {EmpDetails.phone}
      </div>
    </div>
  )
}

export default Profile
