import  './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className="sidebarItem">
            <span className='sidebarTitle'>About Me</span>
            <img src="Bharath.jpg" alt="" />
            <p>
               I am Bharath, as a fresh web developer, i bring a strong foundation on HTML,CSS,Java Script and React with Keep interested in Angular.js                

            </p>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
        <li className="sidebarListItem"> Life  </li>
        <li className="sidebarListItem"> Music </li>
        <li className="sidebarListItem"> Style </li>
        <li className="sidebarListItem"> Sports</li>
        <li className="sidebarListItem"> Tech </li>
        <li className="sidebarListItem"> Cinema </li>
        </ul>

        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>Follow Us</span>
        <div className="sidebarSocial">
        <i className="  sidebarIcon fa-brands fa-square-facebook"></i>
         <i link= "https://www.linkedin.com/in/bharath-ragunathan/" className=" sidebarIcon fa-brands fa-square-twitter"></i>
         <i className=" sidebarIcon fa-brands fa-square-pinterest"></i>
         <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
     
        </div>
        </div>
    </div>
  )
}
