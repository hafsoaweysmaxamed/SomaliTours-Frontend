import Header from "../components/Header"
import { useState } from "react"
import axios from 'axios'
function Booking(){

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Date, setDate] = useState("")
    const [Booking, setBooking] = useState("")
    const [Place, setPlace] = useState("")
  
    const getBooking = (e)=>{
  
      e.preventDefault();
       axios.post("http://localhost:1000/Booking/create",{
        Name:Name,
        Email:Email,
        Phone:Phone,
        Date: Date,
        BookingType:Booking,
        place: Place
       }).then(()=>{
        alert("booking has seved")
      
       }).catch((error)=>{
          console.log(error)
       })
    }
  
  

    return <div>
    
   
    <div className="fixed inset-0 bg-[#6A9AB0] flex items-center justify-center">
    <form className="bg-secdaryColor sm:w-[600px p-8 rounded-lg  left-2 shadow-lg">
      <input value={Name} onChange={(event) => setName(event.target.value)}  className="border-2 border-gray-200 rounded p-2 sm:w-[500px]  w-[350px]   " type="name"placeholder="Enter name" />
      <br />
      <br />
      <input value={Email} onChange={(event) => setEmail(event.target.value)} className="border-2 border-gray-200 rounded p-2 sm:w-[500px] w-[350px]   " type="Email"placeholder="Enter Email" />
      <br />
      <br />
      <input value={Phone} onChange={(event) => setPhone(event.target.value)} className="border-2 border-gray-200 rounded p-2  sm:w-[500px] w-[350px]  " type="Phone"placeholder="Phone" />
      <br />
      <br />
      <input value={Date} onChange={(event) => setDate(event.target.value)} className="border-2 border-gray-200 rounded p-2 sm:w-[500px]  w-[350px]  " type="Date"placeholder="Date" />
      <br />
      <br />
      <select value={Booking} onChange={(event)=> setBooking(event.target.value)}  className="border-2 border-gray-200 rounded  p-2 sm:w-[500px] w-[350px]   flex-1 py-2 px-3 focus:outline-none"
          >
            <option value="10">Select Booking Type</option>
            <option value="1 person">1 person</option>
            <option value="2 person">2 person</option>
            <option value="3 person">3 person</option>
            <option value="4 person">4 person</option>
            <option value="5 person">5 person</option>
            <option value="6 person">6 person</option>
            <option value="7 person">7 person</option>
            <option value="8 person">8 person</option>
            <option value="9 person">9 person</option>
            <option value="10" person>10 person</option>
          </select>
      <br />
      <br />
      <select value={Place} onChange={(event)=> setPlace(event.target.value)}  className="border-2 border-gray-200 rounded  p-2 sm:w-[500px] w-[350px]   flex-1 py-2 px-3 focus:outline-none"
          >
            <option value="">Select tour</option>
            <option value="mogadisho">Mogadhisho</option>
            <option value="Laas Geel">Laas Geel</option>
            <option value="Hargiesa">Hargiesa</option>
            <option value="Buurta sheikh">Buurta sheikh</option>
            <option value="Kismayo">Kismayo</option>
            <option value="Balcad">Balcad</option>
            <option value="Jsacadudiin">Jsacadudiin</option>
            <option value="Adale">Adale</option>
            <option value="Badia">Badia</option>
          </select>
      <br />
      <br />
      <button onClick={getBooking} className=" bg-[#6A9AB0] py-2 px-4 transition duration-150 ease-in-out  rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-32 mt-6 sm:ml-[160px] text-primryColor hover: ">Book Now</button>
    </form>
    </div>
    </div>
}

export default Booking