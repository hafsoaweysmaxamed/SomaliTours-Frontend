import {Routes,Route}from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contect from "./pages/Contect"
import Admin from "./pages/Admin"
import Tours from "./pages/Tours"
import Blogs from "./pages/Blogs"
import AllBooking from "./pages/Dash/AllBooking"
import Dashboard from "./pages/Dash/Dashboard"
import Pages from "./pages/pages"
import Messages from "./pages/Dash/Messages"
import Booking from "./pages/Booking"
import Mogadisho from "./pages/Destinations"
// import Place from "./pages/Dash/Place"

function App(){
    return (

        <Routes>
         <Route path="/"element={<Home/>}/> 
         <Route path="/about"element={<About/>}/> 
         <Route path="/Blogs"element={<Blogs/>}/> 
         <Route path="/Contect"element={<Contect/>}/> 
         <Route path="/Booking"element={<Booking/>}/> 
         <Route path="/Admin"element={<Admin/>}/> 
         <Route path="/Tours"element={<Tours/>}/> 
         <Route path="/Dashboard"element={<Dashboard/>}/> 
         <Route path="/AllBooking"element={<AllBooking/>}/> 
         <Route path="/Messages"element={<Messages/>}/> 
         <Route path="/pages"element={<Pages/>}/> 
         <Route path="/Mogadisho"element={<Mogadisho/>}/> 
         {/* <Route path="/Place"element={<Place/>}/>  */}


         
         
            
        </Routes>
    )
    
}
export default App