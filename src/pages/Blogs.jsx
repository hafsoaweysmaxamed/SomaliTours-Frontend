// import Footer from "../components/Footer"
// import Header from "../components/Header"

// function Blogs(){
//     return <div>
//             <Header/>
//         <div className="text-2xl text-center">
//         <h1>Our Blog</h1>
//         <h1>Lates News and Articles</h1>
//         </div>
//        <div className="flex">

//         <div>
//             <div className="px-10 mb-5 w-[760px] ">
//               <img className="w-[760px]   " src="https://i.pinimg.com/originals/c6/b7/4d/c6b74d0f01491a227a198faa32e27a00.jpg"/>
//               <p className="pt-4 font-roboto">Travel</p>
//                <h1 className="text-2xl py-2 font-roboto hover:text-blue-300">The Top 10 Destinations You Should Visit In 2022</h1>
//                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
//             </div>
        
//         <div>
//         <div className="px-10 mb-5 w-[760px] ">
//                <img className="w-[760px]" src="https://i.pinimg.com/originals/9f/34/c6/9f34c6a424f700f437b52ff1596eb9d4.jpg" />
//                <p className="pt-4 font-roboto">Travel</p>
//                <h1 className="text-2xl py-2 font-roboto hover:text-blue-300">Why You Should Spend Your Summer Vacation in The Mountains</h1>
//                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
//             </div>
//         </div>

//         <div className="px-10 mb-5 w-[760px] ">
//                <img className="w-[760px]" src="https://kit.baliniz.com/travella/wp-content/uploads/sites/22/2022/03/travel-4-e1649177669102.jpg" />
//                <p className="pt-4 font-roboto">Travel</p>
//                <h1 className="text-2xl py-2 font-roboto hover:text-blue-300">Travel the Most Beautiful Places in the World</h1>
//                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
//             </div>
//         </div>


//          <div className="w-[370px] mx-8">
//             <h1 className="text-2xl py-2 font-roboto">Recent Post</h1>
//             <p className="flex gap-1">
//             <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
//             <h1 className="text-gray-500" >Aug 20,2024</h1>
//             </p>
//             <p className="text-2xl py-2 font-roboto hover:text-blue-300">The Top 10 Destinations You Should Visit In 2022</p>
//             <p className="flex gap-1">
//             <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
//             <h1 className="text-gray-500">Aug 20,2024</h1>
//             </p>
//             <p className="text-2xl py-2 font-roboto hover:text-blue-300">Why You Should Spend Your Summer Vacation in The Mountains</p>
//             <p className="flex gap-1">
//             <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
//             <h1 className="text-gray-500">Aug 20,2024</h1>
//             </p>
//             <p className="text-2xl py-2 font-roboto hover:text-blue-300">Travel the Most Beautiful Places in the World</p>
//             <p>
//             <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
//             <h1 className="text-gray-500">Aug 20,2024</h1>
//             </p>
//          </div>
//        </div>
//        <Footer/>
//     </div>
// }

// export default Blogs

import Footer from "../components/Footer"
import Header from "../components/Header"

function Blogs(){
    return <div>
            <Header/>
        <div>
        <h1 className="text-center text-4xl  font-bold mb-9 mt-9 text-secdaryColor">Our Blog</h1>
        </div>
        {/* <h1>Our Blog</h1>
        <h1>Lates News and Articles</h1> */}
       <div className="sm:flex">

        <div>
            <div className=" sm:ml-10 mb-5">
              <img className="sm:w-[800px] sm:h-[450px] w-[500px]  " src="https://img.freepik.com/premium-photo/most-beautiful-place-earth-hd-background-wallpaper_669273-2482.jpg"/>
              <div className=" ml-2 mb-5 sm:w-[760px] w-[450px] mt-10 ">
              <p className="pt-4 font-roboto">Travel</p>
               <h1 className="text-2xl py-2 font-roboto text-secdaryColor">The Top 10 Destinations You Should Visit In 2022</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
               </div>
            </div>
        
        <div>
        <div className="sm:px-10 mb-5 sm:w-[760px] w-[380px] ">
            <div className="sm:flex sm:gap-7 sm:ml-5 ml-3 ">
               <img className="sm:w-[370px] w-[390px] h-[385px]" src="https://i.pinimg.com/474x/0e/97/6a/0e976ae7cd987d68477b5e94e59bb5b3.jpg" />
               <img className="sm:w-[370px] w-[390px] h-[360px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoi6Jn0LIIY6kMvAwtlhb1WOnxt-TQLxzVQ&s" />
               <img className="sm:w-[370px] w-[390px] mb-5 sm:mb-0 h-[360px]" src="https://i.pinimg.com/474x/8d/66/e8/8d66e8b8a6fca9af1dc8549b5b7e3861.jpg" />

               </div>
               <p className="pt-4 font-roboto">Travel</p>
               <h1 className="text-2xl py-2 font-roboto text-secdaryColor hover:text-blue-300">Why You Should Spend Your Summer Vacation in The Mountains</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
            </div>
        </div>

        <div className="sm:px-10 mb-5 sm:w-[760px] w-[450px] ml-1">
            <div className="sm:flex gap-10 ml-3">
            <img className="sm:w-[390px] w-[370px] h-[400px] mb-5" src="https://kit.baliniz.com/travella/wp-content/uploads/sites/22/2022/03/travel-4-e1649177669102.jpg" />
            <img className="sm:w-[390px] w-[370px] h-[400px] mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPe1A4Lw_Fre191KAu-UvaVukbYq3TD3hSUmb_Qf3uaehOgBDwrtQrmzVK-icJaowwAh0&usqp=CAU" />
            <img className="sm:w-[390px] w-[390px]  h-[400px] mb-5" src="https://i.pinimg.com/474x/85/2c/1d/852c1db6d41ddea029a3578679ae960a.jpg" />

               </div>
               <p className="pt-4 font-roboto">Travel</p>
               <h1 className="text-2xl py-2 font-roboto hover:text-blue-300">Travel the Most Beautiful Places in the World</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <button className="text-3xl py-2 font-Playwrite">Read more <i class="fa-solid fa-arrow-right text-secdaryColor text-xl"></i></button>
            </div>
        </div>


         <div className="w-[370px] mx-8 mt-3">
            <h1 className="text-2xl py-2 font-roboto">Recent Post</h1>
            <p className="flex gap-1">
            <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
            <h1 className="text-gray-500" >Aug 20,2024</h1>
            </p>
            <p className="text-2xl py-2 font-roboto text-secdaryColor hover:text-blue-300">The Top 10 Destinations You Should Visit In 2022</p>
            <p className="flex gap-1">
            <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
            <h1 className="text-gray-500">Aug 20,2024</h1>
            </p>
            <p className="text-2xl py-2  text-secdaryColor font-roboto hover:text-blue-300">Why You Should Spend Your Summer Vacation in The Mountains</p>
            <p className="flex gap-1">
            <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
            <h1 className="text-gray-500">Aug 20,2024</h1>
            </p>
            <p className="text-2xl py-2 font-roboto text-secdaryColor">Travel the Most Beautiful Places in the World</p>
            <p>
            <i class="fa-regular fa-circle-check text-gray-500 pt-1"></i>
            <h1 className="text-gray-500">Aug 20,2024</h1>
            </p>
         </div>
       </div>
       <Footer/>
    </div>
}

export default Blogs