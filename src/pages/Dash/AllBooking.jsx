import Sidenav from "../../components/SidNav"
import axios from "axios";
import { useState , useEffect} from "react";
function AllBooking(){

  const [Booking, setBooking] = useState([]);

  const getAllBooking = () => {

    axios.get('http://localhost:1000/Booking/Read').then((response)=>{
      setBooking(response.data);
    }).catch ((error)=>{
      console.log(error);
    })
  };

  useEffect(() => {
    getAllBooking();
  }, []);

    return <div>
        <Sidenav/>
     <div className="sm:ml-[30%]  sm:mr-10">
      <h1 className="sm:text-3xl  font-semibold sm:mb-2 my-4">All Booking</h1>
      {Booking.length > 0 ? (
      <table className="sm:min-w-full  sm:px-0 text-center border-collapse">
     <thead className="bg-gray-600 w-[30px] text-white">
      <tr className="font-poppins sm:ml-10">
        <td className="sm:p-2 py-4 px-0 border">Name</td>
        <td className="sm:p-2 py-4 px-0 border">Email</td>
        <td className="sm:p-2 py-4 px-0 border">Phone</td>
        <td className="sm:p-2 py-4 px-0 border">Date</td>
        <td className="sm:p-2 py-4 px-0 border">BokingType</td>
        <td className="sm:p-2 py-4 px-0 border">Place</td>
      </tr>
      </thead>
      <tbody>
      {Booking.map((data) => (
        <tr className=" hover:bg-indigo- shadow-lg shadow-indigo-50 animate-pulse transform hover:scale-100" key={data._id}>
         <td className="sm:p-2 px-0 py-4 border">{data.Name}</td>
         <td className="sm:p-2 px-0 py-4 border">{data.Email}</td>
         <td className="sm:p-2 px-0 py-4 border">{data.Phone}</td>
         <td className="sm:p-2 px-0 py-4 border">{data.Date}</td>
         <td className="sm:p-2 px-0 py-4 border">{data.BookingType}</td>
         <td className="sm:p-2 px-0 py-4 border">{data.place}</td>
        </tr>
      ))}
      </tbody>
     </table>
     ) : (
      <p className="text-red-500">There is no data available.</p>
    )}

     </div>
    </div>
}

export default AllBooking