import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"

function Home(){

  return<div>
   <Header/>

   <div>
      <div className="bg-cover h-[520px]  w-[400px]  sm:w-full" style={{backgroundImage: "url('https://i.pinimg.com/originals/8a/b9/7b/8ab97b267380adbf8c57f459bdffa270.jpg')"}}>
          <div className="justify-center">  
          <h1 className="text-6xl text-secdaryColor ml-1  sm:w-[600px] font-bold font-roboto sm:ml-[500px] pt-10 mb-4 ">Discover A Beautiful Place With Somaalia</h1>
          <p className="w-[400px]  text-2xl ml-2   text-left sm:ml-[550px] my-2 ">Beautiful Place With Somaalia.</p>
         <Link to="/Booking"> <button className="w-[170px] h-[50px] bg-secdaryColor  ml-32 text-white  sm:ml-[650px] shadow rounded-full my-4 ">Booking Now</button></Link>
        </div>

        </div>
      </div>
         <h1 className="text-center text-5xl text-secdaryColor font-bold mt-8">Features</h1>

   <div className="sm:flex grid gap-4 sm:gap-9 ml-4 my-10">
   <div className="sm:w-[420px] h-[190px]  mr-8 bg-white  shadow-2xl sm:ml-6 ">
     <p className="ml-[150px] sm:ml-[100px] pt-2 text-2xl"> 🏖</p>
     <p className="text-3xl font-bold ml-[120px] sm:ml-9 text-[#16325B]">Beach</p>
    <p className="ml-3 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam suscipit nobis in natus corrupti itaque, </p>
     </div>
    
    <div  className="sm:w-[400px] h-[180px]  mr-8 bg-white  shadow-2xl sm:ml-6 ">
      <p  className="sm:ml-[100px] ml-[150px] pt-2 ">🏕</p>
      <p  className="text-3xl font-bold sm:ml-9 ml-[100px] text-[#16325B] ">Adventure</p>
      <p className="ml-3 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus? Alias illo possimus nulla quibusdam.</p>
    </div> 


      <div  className="sm:w-[400px] h-[180px]  mr-8 bg-white  shadow-2xl sm:ml-6 "> 
      <p  className="sm:ml-[100px ml-[150px] pt-2 ]">🪐</p>
      <p  className="text-3xl font-bold sm:ml-9 ml-[100px]  text-secdaryColor  " >Discovery</p>
      <p className="ml-3 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam possimus quidem error et dignissimos.</p>
      </div>
      
        <div  className="sm:w-[400px] h-[180px]  mr-8 bg-white  shadow-2xl sm:ml-6 ">
          <p  className="sm:ml-[100px] ml-[150px] pt-2 ">✈</p>
          <p  className="text-3xl font-bold sm:ml-9 ml-[100px] text-[#16325B] ">Adventure</p>
          <p className="ml-3 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit ab ducimus libero consequuntur repellendus!</p>
        </div>

  </div>
  <Footer/>
 </div>
  
}
export default  Home