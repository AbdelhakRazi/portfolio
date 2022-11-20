import React from 'react'
import ProfilPicture from "../images/photo_profil.svg"
import '../styles/profile.css'
import  '../styles/global.css'
export default function Profile() {
  return (
    <div className="profile-parent-circle"> 
         <div className="profile-small-circle">
        <div className="profile-circle-shadows">
          <ProfilPicture className="profile-picture"></ProfilPicture></div>
                <div className="profile-frameworks">
            <div className="profile-circle-shadows"><h4>Javascript</h4></div>   
              <div className="profile-circle-shadows"><h4>NodeJs</h4></div>  
                </div>
                <div className="profile-circle-shadows"><h4>Java</h4></div>  
       </div>

      </div>
  )
}
