import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react"

function Destination(){
    const [index, setIndex]= useState(0)
    const [index1, setIndex1]= useState(0)
   
    
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
      "https://i.pinimg.com/474x/86/48/c5/8648c5ebf082dc5e5905a1a2e4dbb91f.jpg",
      "https://i.pinimg.com/564x/ad/39/a6/ad39a689b5722e8f21bbf209eae9f6de.jpg",
      "https://i.pinimg.com/474x/02/05/c1/0205c1ea839c23a63b74a4d619f6a143.jpg",
      "https://i.pinimg.com/736x/74/87/2c/74872c7dca1c6a9f2b4da2e471cc17cd.jpg",
      "https://i.pinimg.com/474x/05/c3/78/05c37852f58a7e63efdbe14538ae1187.jpg"
    ]
    
   
  
    return <div>
     <Header/>
    <div className="bg-cover h-[450px] opacity-55 shadow-inherit" style={{backgroundImage: "url('https://i.pinimg.com/564x/3f/fd/5d/3ffd5de185a537a5043e6aa4366e1d8a.jpg')"}}>
      <h1 className="text-4xl font-poppins text-center text-white pt-32">Bast Tourism</h1>
    </div>
      <h1 className="text-center text-3xl font-semibold font-roboto pt-6">Amesing Tourism</h1>
    <div className="sm:flex grid justify-center gap-2">
        <div className="sm:w-[250px] w-[300px]  sm:mt-20 ml-10 p-2 rounded-lg drop-shadow-md transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[300px] h-[200px]" src="https://i.pinimg.com/564x/8d/52/8f/8d528fb1cbfdb2ba8d4850109efcc4ec.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px] sm:ml-0 ml-10 sm:mt-20 p-2 rounded-lg animate-pulse shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[300px]  h-[200px]" src="https://i.pinimg.com/originals/cd/45/10/cd4510f177e91f7c2d29d046b8a30231.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px]  sm:ml-0 ml-10 sm:mt-20 p-2 rounded-lg shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[300px]   h-[200px]" src="https://i.pinimg.com/736x/b3/1b/f5/b31bf56621454f1405193c7742b085ad.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px]  sm:ml-0 ml-10 sm:mt-20 p-2 rounded-lg  shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px] w-[300px] h-[200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMznNYu1bKAD4T4fGYDAwhlOBK0TqeLPwjFOHYC2RqauKVGOiUGoogyefet8hqyefAQc&usA"/> 
        </div>
         <div className="sm:w-[250px]  sm:ml-0 ml-10 sm:mt-20 p-2 rounded-lg shadow-2xl transform hover:scale-90 duration-75">
            <img className="sm:w-[250px]  w-[300px] h-[200px]" src="https://i.pinimg.com/474x/71/b2/44/71b2449f8185fa2359f64863f4ed5aef.jpg"/> 
        </div>
    </div>

    

    <h1 className="text-center text-4xl font-poppins py-6">Choose Destination</h1>

    <div className="sm:flex grid grid-cols-3 sm:gap-4 mx-8 gap-2 justify-center mb-10 ">
        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/474x/92/a5/3e/92a53ef12464970a4a866cf87e004a32.jpg"/>
            <h1 className="font-Playwrite ">Mogadishu</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/564x/53/19/96/531996a416c71c0ffb85c3f17dfa7550.jpg"/>
            <h1 className="font-Playwrite ">Laas Geel</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/474x/10/37/5e/10375e72d8f93ee0f953fc4627057563.jpg"/>
            <h1 className="font-Playwrite ">Hargiesa</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/originals/cd/45/10/cd4510f177e91f7c2d29d046b8a30231.jpg"/>
            <h1 className="font-Playwrite ">Buurta sheikh</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/564x/9b/07/6b/9b076be606bc387ae97817a947947bea.jpg"/>
            <h1 className="font-Playwrite ">Kismayo</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/564x/4e/e2/d6/4ee2d6fc93d417738ce11d30536d4f57.jpg"/>
            <h1 className="font-Playwrite ">Balcad</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/564x/2e/89/a3/2e89a33c01f87496067d84e69e4368a7.jpg"/>
            <h1 className="font-Playwrite ">Jsacadudiin</h1>
        </div>

        <div className="my-4 ">
            <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/564x/02/05/c1/0205c1ea839c23a63b74a4d619f6a143.jpg"/>
            <h1 className="font-Playwrite ml-4 ">Adale</h1>
        </div>

        <div className="my-4 ">
             <img className="w-20 h-20 rounded-full shadow-2xl transform hover:scale-90 -duration-75" src="https://i.pinimg.com/474x/f0/00/dd/f000dd701da50e08899ce1e2c08a20be.jpg"/>
            <h1 className="font-Playwrite ml-4">Badia</h1>
        </div>
    </div>

    <div className="bg-cover h-[350px] opacity-55 shadow-inherit" style={{backgroundImage: "url('https://i.pinimg.com/474x/02/05/c1/0205c1ea839c23a63b74a4d619f6a143.jpg')"}}></div>

{/* slides */}
   

{/* //image slider2 */}
<div className="sm:flex sm:justify-around grid grid-row-3 absolute sm:top-[1150px] top-[2270px] right-0  sm:right-[255px]"> 

<div className=" sm:flex grid grid-rows-3 sm:justify-center w-[500px] ">
<i onClick={handprevImages} class="fa-solid fa-arrow-left  sm:text-3xl sm:mt-[180px]  sm:mx-32 ml-32  text-indigo-500 animate-bounce sm:w-6 sm:h-6 ..."></i>
<img  className="w-[200px] sm:w-[470px] sm:h-[300px] object-cover  sm:mt-10 rounded shadow-2xl transform hover:scale-90 -duration-75 "   src={images[index1]}  />
<i onClick={handlNextImages} class="fa-solid fa-arrow-right sm:text-3xl  sm:mt-[180px] text-indigo-500 animate-bounce sm:w-6 sm:h-6 ..."></i>
</div>
</div>



<div className="sm:flex mx-8 sm:mx-0 gap-10 justify-center mt-14">
    <div className="">
    <i class="fa-solid fa-quote-left text-3xl"></i>
    <div className="flex gap-4">
    <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/474x/7a/90/9c/7a909cb879e633d5d5852c668bb5a4c6.jpg"/>
    <div className="w-[250px] items-end">
        <h1 className="text-2xl font-Playwrite items-end ">maryan mohamed</h1>
        <p>waxan idinkugu mahad cilaa sida quruxda badan ee howl karnimada leh ee aad ugu adegeysan bulshada</p>
    </div>
    </div>
    </div>

    <div className="">
    <i class="fa-solid fa-quote-left text-3xl"></i>
    <div className="flex gap-4">
    <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/474x/ff/9a/8f/ff9a8fdbf411018e730072ecb1a253cc.jpg"/>
    <div className="w-[250px] items-end">
        <h1 className="text-2xl font-Playwrite ">Eng Farax</h1>
        <p>waxan idinkugu mahad cilaa sida quruxda badan ee howl karnimada leh ee aad ugu adegeysan bulshada</p>
    </div>
    </div>
    </div>
</div>
<div className="flex gap-1 justify-center mb-14">
    <h1  className="text-7xl">.</h1>
    <h1  className="text-7xl text-blue-400">.</h1>
    <h1 className="text-7xl">..</h1>
</div>


 
 <div className="sm:flex grid justify-center mb-0">
        <div className="sm:w-[250px] w-[300px] sm:ml-0 mx-10  rounded-lg">
            <img className="sm:w-[250px] w-[300px]   h-[200px]" src="https://i.pinimg.com/564x/b7/f3/de/b7f3dee6e2024567e89b4a1ebc0f6be0.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px]  sm:ml-0 ml-10  rounded-lg">
            <img className="sm:w-[250px] w-[300px] h-[200px]" src="https://i.pinimg.com/564x/b8/42/e0/b842e00f96d5141217017ffee4f5d393.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px] sm:ml-0 ml-10  rounded-lg">
            <img className="sm:w-[250px] w-[300px] h-[200px]" src="https://i.pinimg.com/564x/d3/05/2c/d3052ce0a495ed15ef8aab8142640df2.jpg"/>
        </div>

        <div className="sm:w-[250px] w-[300px] sm:ml-0 ml-10   rounded-lg">
            <img className="sm:w-[250px] w-[300px] h-[200px]" src="https://i.pinimg.com/564x/9b/07/6b/9b076be606bc387ae97817a947947bea.jpg"/> 
        </div>

        <div className="sm:w-[250px] w-[300px]    sm:ml-0 ml-10 rounded-lg">
            <img className="sm:w-[250px] w-[300px]   h-[200px]" src="https://i.pinimg.com/564x/02/05/c1/0205c1ea839c23a63b74a4d619f6a143.jpg"/> 
        </div>
    </div>


    <Footer/>
    </div>
    

}
export default Destination