import Sidenav from "../../components/SidNav"
import {useEffect, useState } from "react";
import axios from 'axios'
function Messages (){

  const [Message, setMessage] = useState([]);

  const getAllMessage = async () => {

      axios.get('http://localhost:1000/Message').then((response)=>{
      setMessage(response.data);
    }).catch ((error)=>{
      console.log(error);
    })
  };

  useEffect(() => {
    getAllMessage();
  }, []);

  const deleteMessage = (id) => {
    axios.delete(`http://localhost:1000/delete/${id}`).then(() => {
      alert("Message has been deleted successfully");
      getAllMessage();
    }).catch((error) => {
      console.log(error);
    });
  };

  return <div>
    <Sidenav/>
     <div className="sm:ml-[25%] mx-4 sm:mr-8">
     <h1 className="py-4">Message page</h1>
     {Message.length > 0 ? (
     <table className="min-w-full text-center border-collapse">
     <thead className="bg-gray-600 text-white">
      <tr className="font-poppins ml-10">
        <td className="p-2 border">Name</td>
        <td className="p-2 border">Email</td>
        <td className="p-2 border">Messages</td>
        <td className="p-2 border">Action</td>
      </tr>
      </thead>
      <tbody>
      {Message.map((data) => (
        <tr key={data._id}>
         <td className="sm:p-2 py-4 border">{data.Name}</td>
         <td className="sm:p-2 py-4 border">{data.Email}</td>
         <td className="sm:p-2 py-4 border">{data.Message}</td>
         <td className="sm:p-2 py-4 border">
                    <button onClick={() => deleteMessage(data._id)} className="bg-red-500 rounded p-2 text-white">
                      Delete
                    </button>
                  </td>
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
export default Messages