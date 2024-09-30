import Header from "../components/Header"
import Footer from "../components/Footer"

function Serveci(){
   return <div>
    <Header/>
    <div>
        <div className="bg-cover h-[450px] opacity-55 shadow-inherit " style={{backgroundImage: "url('https://i.pinimg.com/564x/3b/14/4b/3b144b3d12dbae362a2597e10d536c75.jpg')"}}>
              <h1 className="text-5xl text-center pt-[180px] font-poppins">Our servce</h1>
           
        </div>

        <div className="py-16">
        <h1 className="text-center text-3xl font-bold mt-4">Welcome To My Hotel</h1>
        <p className="sm:w-[700px] mx-4 mb-5 sm:mb-0 sm:ml-[400px] mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eligendi veritatis nisi exercitationem reiciendis. Minus molestiae ipsa omnis quam, dignissimos, odit quibusdam recusandae dolor praesentium doloremque excepturi beatae numquam aspernatur.</p>

        <div className="sm:flex grid justify-center gap-5 sm:mt-8">
          <img className="w-[300px] h-[300px]" src="https://i.pinimg.com/474x/b6/aa/91/b6aa915a8af1139561f0b9ec24a2e5af.jpg"/>
          <img  className="w-[300px] h-[300px]"  src="https://i.pinimg.com/736x/f8/7d/2b/f87d2b8787ad2b657445750a7ab8d17d.jpg"/>
          <img  className="w-[300px] h-[300px]"  src="https://i.pinimg.com/474x/7e/fe/5c/7efe5cf4747658213aac00bb819d69ed.jpg"/>
        </div>
        <button className="bg-secdaryColor text-white rounded w-[100px] h-[40px] ml-[150px] sm:ml-[600px] mt-5">View All</button>
      </div>

          <h1 className="text-3xl font-Playwrite sm:my-0 mb-6 text-center">Our Servece</h1>
        
        <div className="sm:mx-[280px] sm:py-16">
        <div className="flex gap-2 mr-2">
         <div className="sm:w-[300px] w-[480px] border-2 border-gray-500 ml-10">
           <img className="sm:w-[300px] w-[480px] h-[200px] rounded" src="https://i.pinimg.com/474x/97/e8/e6/97e8e60e31c84952c1682b08478ed755.jpg"/>
           <h1 className="bg-slate-500 text-primryColor sm:text-2xl font-poppins px-2 w-20  absolute sm:top-[1290px] top-[1923px] ">Hotel</h1>
         </div>

         <div className="sm:-[300px] border-2 border-gray-500 ">
           <img className="sm:w-[300px] w-[480px] h-[200px] rounded  " src="https://i.pinimg.com/564x/1e/86/84/1e8684e8f23d3a4b4f22506f0175f528.jpg"/>
           <h1 className="bg-slate-500 text-primryColor sm:text-2xl font-poppins px-2 w-40  absolute sm:top-[1290px] top-[1923px] ">Photography</h1>
         </div>
        </div>

        <div className="flex gap-2 mr-2 sm:mb-0 mb-8">
        <div className="sm:w-[180px] sm:h-[254px] w-[350px] h-[180px] border-2 border-gray-500 ml-10 ">
           <img className="sm:w-[180px] w-[350px] sm:h-[250px] h-[180px] rounded  " src="data:image/jpeg;base64,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"/>
           <h1 className="bg-slate-500 text-primryColor sm:text-2xl font-poppins px-2 w-30  absolute sm:top-[1496px] top-[2128px] ">light a fire</h1>
         </div>

         <div className="sm:w-[228px] sm:h-[200px] w-[150px] h-[100px] border-4 border-gray-500 mt-10 sm:my-4">
           <h1 className="text-gray-500 sm:text-5xl font-poppins p-6 ">Tourism Datly</h1>
         </div>

         <div className="sm:w-[180px] sm:h-[254px] w-[350px] h-[180px] border-2 border-gray-500 ">
           <img className="sm:w-[180px] w-[350px]  sm:h-[250px] h-[180px] rounded  " src="https://i.pinimg.com/474x/ba/20/a5/ba20a5879c3e852e3c4ee2113dbbe7f3.jpg"/>
           <h1 className="bg-slate-500 text-primryColor sm:text-2xl font-poppins px-2 sm:w-40 w-24  absolute sm:top-[1496px] top-[2128px] ">Competition the motorcycle</h1>
         </div>
        </div>
        </div>


      <div className="bg-secdaryColor w-full h-[530px] sm:py-2 py-4  sm:mt-10">
      <h1 className="text-center text-3xl font-bold sm:mt-4 my-4 text-white">Why Choose Us</h1>
      <div className="sm:flex grid grid-cols-2 justify-center mx-8 sm:gap-8">
        <div>
        <img className="sm:w-[250px] w-[150px] h-[120px] sm:h-[200px] mt-2" src="https://i.pinimg.com/474x/b7/53/c6/b753c6a3f341b26be2ea5c7364104fb5.jpg"/>
        <img className="sm:w-[250px] w-[150px] h-[120px] sm:h-[200px] mt-2" src="https://i.pinimg.com/474x/7e/94/f3/7e94f3150f0e98e6d7fe7b64b1d95385.jpg"/>
        </div>
        <div>
          <img className="sm:w-[250px] w-[150px] h-[120px] sm:h-[200px] mt-2" src="https://i.pinimg.com/474x/57/78/d5/5778d5c2e0a6e868ce953801f98158fb.jpg"/>
          <img className="sm:w-[250px] w-[150px] h-[120px] sm:h-[200px] mt-2" src="https://i.pinimg.com/474x/af/84/3b/af843b39aaacd806ded49fc19cd66030.jpg"/>
        </div>
        <div className="flex  gap-5">
          <img className="sm:w-[250px] w-[150px] h-[120px] sm:h-[200px] mt-2"  src="https://i.pinimg.com/474x/fb/46/e3/fb46e35643706317cb5a346d26cb7934.jpg"/>
          <img  className="sm:w-[250px] w-[500px] h-[120px] sm:h-[200px] mt-2" src="https://i.pinimg.com/474x/03/f9/28/03f9282fd315fb4bc15f5518b94ba6a0.jpg"/>
        </div>


      </div>
      <button className="bg-indigo-400 text-white rounded w-[100px] h-[40px] ml-[600px] mt-2">View All</button>
      </div>

      <div>
      <img  className="sm:w-[700px] w-[350px] h-[220px] mx-4 sm:h-[350px] rounded my-4 sm:mt-10 sm:mx-[200px]"  src="https://i.pinimg.com/474x/7e/fe/5c/7efe5cf4747658213aac00bb819d69ed.jpg"/>
      <div className="flex sm:gap-[400px] sm:ml-[240px] gap-24 mx-4  text-xl">
      <p className="font-poppins "><i class="fa-solid fa-wifi"></i>Free wifi</p>
      <p className="font-poppins "><i class="fa-solid fa-mug-hot"></i>Free Breakfast</p>
      </div>
      <div className="flex sm:gap-[450px] gap-32 mx-8 sm:ml-[240px]">
        <h1 className="text-xl font-poppins">Elit Hotel</h1>
        <h1 className="text-xl font-poppins">$200</h1>
      </div>
      <div className="flex gap-4 sm:ml-[240px] mx-4 mb-4 ">
        <i class="fa-solid fa-location-dot text-xl"></i>
        <p className="text-gray-500">liido beach</p>
      </div>
      <div className="sm:ml-[240px] mx-8 sm:w-[500px] mb-8">
        <p className="text-2xl font-poppins">Description</p>
        <p className="font-poppins">Elit Hotel Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis impedit quidem dolorum sapiente, possimus aut maxime iure error recusandae?</p>
      </div>
      </div>

      <div>
      <h1 className="text-center text-4xl font-poppins">Our Testimoniaks</h1>
      <div className="sm:flex sm:justify-center grid gap-6 mx-4 mt-9">
        <div className="w-[350px] shadow-2xl transform hover:scale-90 -duration-75 h-[195px] rounded py-2 px-4 ">
          <p className="text-black p-2 text-left font-poppins">Lrem veniam modi veritatis numquam? Cumque, ipsa, perspiciatis veniam nihil consequuntur accusantium temporibus ipsam, nisi earum expedita consequatur fugiat fuga?</p>
          <div className="flex">
           <img className="w-[50px] h-[50px] rounded-full ml-2 mt-1" src="https://i.pinimg.com/474x/15/9d/3e/159d3e5351fc81667acf41618657faff.jpg"/>
           <div>
            <h1 className="text-xl ml-4 mt-2 font-poppins">Abdulaahi Salim </h1>
            <p className="ml-3 text-yellow-300">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </p>

            </div> 
          </div>

        </div>

        <div className="w-[350px] h-[195px] rounded shadow-2xl transform hover:scale-90 -duration-75 py-2 px-4 ">
          <p className="text-black p-2 text-left font-poppins">Lrem veniam modi veritatis numquam? Cumque, ipsa, perspiciatis veniam nihil consequuntur accusantium temporibus ipsam, nisi earum expedita consequatur fugiat fuga?</p>
          <div className="flex">
           <img className="w-[50px] h-[50px] rounded-full ml-2 mt-1" src="https://i.pinimg.com/474x/15/9d/3e/159d3e5351fc81667acf41618657faff.jpg"/>
           <div>
            <h1 className="text-xl ml-4 mt-2 font-poppins">Faarax Xasan</h1>
            <p className="ml-3 text-yellow-300">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </p>

            </div> 
          </div>

        </div>

        <div className="w-[350px] h-[195px] rounded shadow-2xl transform hover:scale-90 -duration-75 py-2 px-4 ">
          <p className="p-2 text-left font-poppins">Lrem veniam modi veritatis numquam? Cumque, ipsa, perspiciatis veniam nihil consequuntur accusantium temporibus ipsam, nisi earum expedita consequatur fugiat fuga?</p>
          <div className="flex">
           <img className="w-[50px] h-[50px] rounded-full ml-2 mt-1" src="https://i.pinimg.com/474x/15/9d/3e/159d3e5351fc81667acf41618657faff.jpg"/>
           <div>
            <h1 className="text-xl ml-4 mt-2 font-poppins">Xasan Abdulaahi</h1>
            <p className="ml-3 text-yellow-300">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </p>

            </div> 
          </div>

        </div>
         
      </div>
     </div>

      <div className="sm:flex grid justify-center mt-16 gap-2">
        <div className="sm:w-[250px] w-[330px]  sm:mt-20 mx-10 p-2 rounded-lg drop-shadow-md transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[330px] h-[200px]" src="https://i.pinimg.com/474x/b6/a9/11/b6a911bdd2b389ea5dd56a215b66ee38.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[330px]  sm:ml-0 mx-10 sm:mt-20 p-2 rounded-lg animate-pulse shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[330px] h-[200px]" src="https://i.pinimg.com/474x/29/41/f6/2941f6038ec77be3cd01fcf57c984aae.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[330px]  sm:ml-0 mx-10 sm:mt-20 p-2 rounded-lg shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[330px] h-[200px]" src="https://i.pinimg.com/474x/97/e8/e6/97e8e60e31c84952c1682b08478ed755.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[330px]  sm:ml-0 mx-10 sm:mt-20 p-2 rounded-lg  shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[330px] h-[200px]" src="https://i.pinimg.com/474x/ea/3d/d4/ea3dd47276b865c44d253c028da19a06.jpg"/> 
        </div>

        <div className="sm:w-[250px] w-[330px]  sm:ml-0 mx-10 sm:mt-20 p-2 rounded-lg shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[330px]  h-[200px]" src="https://i.pinimg.com/564x/b3/41/76/b34176475cf57474710f2ac164b986f5.jpg"/> 
        </div>
    </div>

    </div>
    <Footer/>
   </div>
}

export default Serveci