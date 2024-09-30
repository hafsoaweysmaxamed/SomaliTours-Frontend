import ImageSlider from "../components/imageSlider"
import { useState } from "react"
import bgVideo from "../assets/jasiirada sacadiin.mp4"
import Header from "../components/Header"
import Footer from "../components/Footer"

function About(){

  const [index, setIndex]= useState(0)
  const [index1, setIndex1]= useState(0)
  // handle next button
  const handlNextImage=() =>{
  if(index < images.length -1){
  
      setIndex(index + 1)
  }
  }
  // handle prev button
  const handprevImage=() =>{
  if(index > 0 ){
  
      setIndex(index - 1)
  }
  }
  
  // handle next button
  const handlNextImages=() =>{
  if(index < images.length -1){
  
      setIndex1(index1 + 1)
  }
  }
  // handle prev button
  const handprevImages=() =>{
  if(index1 > 0 ){
  
      setIndex1(index1 - 1)
  }
  }
  
  const images=[
    "https://i.pinimg.com/originals/f5/d8/13/f5d8136b62a206be59379989f955020c.jpg",
    "https://i.pinimg.com/originals/10/78/fd/1078fd7cf01707a188aad9b36def2239.jpg",
    "https://i.pinimg.com/474x/92/a5/3e/92a53ef12464970a4a866cf87e004a32.jpg",
    "https://i.pinimg.com/474x/51/2d/d6/512dd629e0c06283b505b4a67bb9c147.jpg",
    "https://i.pinimg.com/originals/22/e4/d8/22e4d8dac034a279e851558a96d5fa1e.jpg"
  ]
  
  const image=[
      "https://i.pinimg.com/736x/bf/e0/86/bfe086eafc7c1b8495e4af2d455e4f28.jpg",
      "https://i.pinimg.com/564x/e7/de/77/e7de77f83af10e76032b64439f1102d5.jpg",
      "https://i.pinimg.com/736x/78/04/d5/7804d59bca8c71e0ce97689fc62e7d2d.jpg",
      "https://i.pinimg.com/736x/bf/e0/86/bfe086eafc7c1b8495e4af2d455e4f28.jpg",
      "https://i.pinimg.com/736x/47/d3/57/47d357a3c147779cf12b8b58a150fcd3.jpg"
    ]

  return <div>
    <Header/>
    <div className="sm:flex gap-10 bg-cover h-[558px] placeholder-opacity-55 shadow-inherit" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPe1A4Lw_Fre191KAu-UvaVukbYq3TD3hSUmb_Qf3uaehOgBDwrtQrmzVK-icJaowwAh0&usqp=CAU')"}}>
      <div className="sm:w-[500px] sm:mt-8 mt-0  mx-4 sm:mx-10 text-black">
          <h4 className="text-secdaryColor font-bold text-3xl font-poppins">About</h4>
          <h1 className="sm:text-4xl text-xl font-bold py-8 font-poppins ">We Will Helping You Find Your Dream Vacation</h1>
          <p className="font-Playwrite">Somali tourism company is an experienced tourism company that have been providing tour services since 2022 based in Mogadishu, Somalia.</p>
          <div className="flex gap-4  pt-1">
          <i class="fa-solid fa-handshake bg-secdaryColor text-primryColor w-[60px] h-[50px] mt-4 p-2 rounded-lg text-2xl"></i>
            <div className="mt-2">
              <h1 className="text-2xl font-bold font-roboto">Our Vision</h1>
              <p className="font-Playwrite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad debitis et necessitatibus deleniti repellendus laboriosam!</p>
            </div>
          </div>
          <div className="flex gap-4 pt-1">
          <i class="fa-solid fa-mobile bg-secdaryColor text-primryColor w-[70px] h-[45px] rounded pl-4 p-2 mt-4 text-2xl"></i>
         <div className="mt-2">
          <p className="text-2xl font-bold font-roboto">Our Mission</p>
          <p className="font-Playwrite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad debitis et necessitatibus deleniti repellendus laboriosam!</p>
          </div>
          </div>
          <button className="bg-secdaryColor ml-20  px-4 py-2 text-primryColor rounded-full my-6 hover:bg-primryColor hover:text-secdaryColor text-xl font-poppins">View Tours</button>
      </div>

      <div>
       
      {/* <div className="w-[450px">
             <img className="w-[600px] h-[430px] mt-14 rounded" src="https://kit.baliniz.com/travella/wp-content/uploads/sites/22/elementor/thumbs/young-couple-travelers-in-winter-city-man-and-woman-reading-map-e1649177467370-pmxdf4ra9rxrb5vz5seo95ifwf1vq498bafx2jv2ug.jpg"/>
        </div> */}
        
        {/* //image slider1 */}
     <div className="sm:flex grid gap-6 bg-primryColor ">

     <div className="text-center absolute sm:top-[250px] right-0 "> 

     <div className=" sm:flex sm:justify-center sm:w-[500px] w-[450px] ml-10 ">
     <img  className=" w-[350px] sm:w-[270px] sm:h-[250px] sm:ml-14 ml-16  object-cover  mt-10 rounded"   src={image[index]}  />
     </div>
     <input className="mr-6 text-7xl" onClick={handprevImage}  type="radio" />
     <input onClick={handlNextImage} type="radio" />
     </div>
     {/* //image slider2 */}
     <div className="text-center absolute sm:top-[250px] top-[1000px] sm:right-[255px] right-0 "> 

     <div className=" sm:flex sm:justify-center sm:w-[500px] w-[450px] ml-10 ">
     <img  className="w-[350px] sm:w-[270px] sm:h-[250px] sm:ml-14 ml-16  object-cover  mt-10 rounded"   src={images[index1]}  />
     </div>
    <input className="mr-6 text-7xl" onClick={handprevImages}  type="radio" />
    <input onClick={handlNextImages} type="radio" />
    </div>

   </div>
   </div>

    

    </div>
    
    {/* qeybta dhaxe */}

    <div className="w-full h-[207px] mt-[700px] sm:mt-0" style={{backgroundImage: "url('https://sahantourism.com/wp-content/uploads/2022/07/Somalia-tour-packages-1024x577.png')"}}>
        <div className="sm:text-primryColor text-black text-center py-10 mt-14">
        <h2 className="sm:text-xl font-semibold  sm:py-2 font-Playwrite">Best Travel Agency</h2>
        <h1 className="sm:text-3xl font-bold py-2 font-roboto">We are Professional Planners for Your Vacations</h1>
        <p className=""> tempor incididunt ut labore et dolore magna aliqua</p>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
    </div>
      </div>
      
       <div className="sm:flex mx-6  grid grid-cols-2 gap-4 sm:justify-around my-20 text-secdaryColor">
          <div className="sm:ml-3">
          <i class="fa-solid fa-globe text-4xl ml-10 text-secdaryColor "></i>
          <h1 className="ml-8 text-2xl font-roboto">1,043 <span className="text-3xl font-roboto">+</span></h1>
          <p className="font-poppins text-xl">Happy Traveller</p>
          </div>
          <div className="ml-2">
          <i class="fa-solid fa-voicemail text-4xl ml-10 text-secdaryColor"></i>
          <h1 className="ml-12 text-2xl font-roboto">50<span className="text-3xl font-roboto">+</span></h1>
          <p className="font-poppins text-xl">Tour Packages</p>
          </div>
          <div className="mt-6 sm:ml-2">
          <i class="fa-solid fa-medal text-4xl sm:ml-10 ml-12 text-secdaryColor "></i>
          <h1 className="ml-12 text-2xl font-roboto">10<span className="text-3xl font-roboto">+</span></h1>
          <p className="font-poppins text-xl">Years of Experience</p>
          </div>
          <div className="mt-6 ml-2" >
          <i class="fa-regular fa-user text-4xl sm:ml-10 ml-12 text-secdaryColor"></i>
          <h1 className="ml-12 text-2xl font-roboto">30<span className="text-3xl font-roboto">+</span></h1>
          <p className="font-poppins text-xl">Professional Guide</p>
          </div>
       </div>
       {/* <div className="">
       <video controls  src={bgVideo} autoPlay loop muted className="w-full  pt-32 rounded-r-3xl object-contain "/>
       </div> */}


    {/* <div className="mt-[400px]">
      <h1>welcome</h1>
    </div> */}


    {/* bg vedio  */}
    <div className="">

     <Footer />
    </div>
    </div>


}

export default About