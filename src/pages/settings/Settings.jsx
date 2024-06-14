import './Settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
       <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle"> Update Your Account </span>
                <span className="settingsDeleteTitle"> Delete Account </span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture </label>
                <div className="settingsPP">
                    <img src="page 3 img.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label>User Name </label>
                <input type="text" placeholder='Bharath' />
                <label>Email </label>
                <input type="email" placeholder='bharathragu@gmail.com' />
                <label>Password </label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
                
            </form>
         </div>
        <Sidebar/>
      
    </div>
  )
}
