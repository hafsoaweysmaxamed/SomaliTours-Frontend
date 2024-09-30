import { NavLink } from "react-router-dom"
function Sidenav(){

  

    return <div>
        <div className="sm:h-screen border-r-2 border-gray-400 sm:fixed  text-white sm:w-[21%]  w-full h-[10%] bg-secdaryColor">
            <div className="pt-4  sm:pl-24 pl-4 text-center">
             <img className="sm:w-14 w-8 rounded-full sm:mr-8" src="https://i.pinimg.com/474x/39/63/be/3963bef39cb0d0e754a2db046cc24a2d.jpg"/>
            </div>
            <h1 className="font-light font-Playwrite sm:text-4xl sm:py-4 mt-0 ml-3  sm:px-4">Somali Tourism</h1>
            <ul className="sm:text-xl font-Playwrite ml-2">
            <NavLink to="/Dashboard"><li className="sm:ml-16 pt-6"><i class="fa-solid fa-house sm:pr-2 mr- "></i>DASHBOARD</li></NavLink>
            <NavLink to="/AllBooking"><li className="sm:ml-16 pt-6"><i class="fa-regular fa-clipboard sm:pr-2 "></i>AllBOOKING</li></NavLink>
            <NavLink to="/Messages"><li className="sm:ml-16 pt-6"><i class="fa-regular fa-message sm:pr-2"></i>MESSAGE</li></NavLink>
            </ul>

        </div>

    </div>
}
export default Sidenav