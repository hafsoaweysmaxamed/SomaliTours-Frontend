import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function Contect(){

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Message, setMessage] = useState("")

  const Navigate = useNavigate()

  const HandleMessge = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:1000/Create",{
      Name:Name,
      Email: Email,
      Message: Message
    }).then(()=>{
      alert("Message has been seved")
    }).catch((error) => {console.log(error)})
  }

    return <div>
      <Header/>
      <div className="bg-secdaryColor w-full h-[320px] px-10 text-primryColor">
        <div className="sm:w-[600px] sm:py-7">

        <h1 className="text-4xl font-bold font-roboto py-4 ">Contact Us</h1>
        <p className="text-xl   ">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        </div>
      </div>
        
        <div className="flex gap-8 sm:mb-[220px] ">
           <div className="text-secdaryColor py-8  sm:ml-20" >
               <h1 className="sm:text-4xl  ml-10  font-bold">Contact Information</h1>
               <div className="sm:flex ml-4 sm:ml-0 gap-4">
                  <div>
                    <i class="fa-solid fa-phone mx-16  mt-5"></i>
                    <h1 className="">(+252) 612-289-504</h1>
                  </div>
                  <div>
                    <i class="fa-solid fa-envelope mx-16  mt-5 "></i>
                    <p className="">info@stellaryv.com</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-location-dot mx-16 mt-5 "></i>
                    <h1 className="">1234 Street Name, City, Country</h1>
                  </div>
               </div>
               <div className="mt-7 sm:mx-[190px] sm:ml-0 ml-4 text-2xl flex">
                  <i class="fa-brands fa-facebook ml-2"></i>
                  <i class="fa-brands fa-twitter ml-2"></i>
                  <i class="fa-brands fa-instagram ml-2 "></i>
                  <i class="fa-brands fa-whatsapp ml-2"></i>
               </div>
           </div>
          
           <div className=" absolute sm:top-[180px] top-[290px] sm:right-[100px]  right-[20px] ml-10 sm:ml-0  ">
              <img className=" sm:w-[500px] w-[150px] h-[170px]  sm:h-[550px] border-t-4 border-primryColor rounded-t-full" src="https://i.pinimg.com/474x/92/a5/3e/92a53ef12464970a4a866cf87e004a32.jpg"/>
            </div>
        </div>
            
            <div className="sm:flex grid  sm:mx-0 mx-4 gap-8 ">
               <form className="bg-secdaryColor mt-6 sm:w-[500px] w-[350px] sm:h-[500px] rounded sm:ml-10" >
                  <input value={Name} onChange={(event) => setName(event.target.value)}  className="sm:w-[450px] w-[320px]  sm:mx-6 my-4  ml-4  border-2 border-gray-400 bg-secdaryColor text-2xl text-primryColor p-2 rounded-xl" type="text"placeholder="Enter your Name" /> 
                  <input value={Email} onChange={(event) => setEmail(event.target.value)} className="sm:w-[450px]  w-[320px] sm:mx-6 my-4  ml-4  border-2 border-gray-400 bg-secdaryColor text-2xl text-primryColor p-2 rounded-xl" type="text"placeholder="Enter your Email" /> 
                  <textarea  value={Message} onChange={(event) => setMessage(event.target.value)} className="sm:w-[450px] w-[320px] sm:mx-6 ml-4    my-4 border-2 border-gray-400 bg-secdaryColor text-2xl text-primryColor p-2 rounded-xl" placeholder="Message"></textarea>

                  <button  onClick={HandleMessge} className="sm:w-[400px] w-[320px] h-[50px] bg-primryColor text-secdaryColor text-2xl ml-4 sm:mx-12   my-6 rounded">Send Message</button>
               </form>
                
                <div className="sm:mx-8">
                  <h1 className="font-bold font-roboto text-3xl text-secdaryColor ">Our Location</h1>
                  <p className="font-poppins py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur animi numquam dolores sed totam!</p>
                  <iframe width="520"  height="320" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Taleex%20mogadisho%20somalia+(Somali%20Tourism%20company%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                  <h1 className="text-2xl text-secdaryColor font-roboto pt-4">Socail Madei</h1>
                  <div className="text-2xl text-secdaryColor">
                  <i class="fa-brands fa-facebook ml-2"></i>
                  <i class="fa-brands fa-twitter ml-2"></i>
                  <i class="fa-brands fa-instagram ml-2 "></i>
                  <i class="fa-brands fa-whatsapp ml-2"></i>
               </div>
                </div>
            </div>
            <Footer/>
           
    </div>

}
export default Contect