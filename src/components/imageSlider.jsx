
import { useState } from "react"
function ImageSlider() {

const [index, setIndex]= useState(0)
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

    const images=[
      "https://img.freepik.com/premium-photo/most-beautiful-beach-image-tourist-spot-nature-background-abstract-background_910766-332.jpg",
      "https://sahantourism.com/wp-content/uploads/2021/11/mogadisho-light-house.jpg",
      "https://sahantourism.com/wp-content/uploads/2021/11/mogadisho-light-house.jpg",
      "https://sahantourism.com/wp-content/uploads/2021/11/boroma-somaliland-2.jpg",
      ""


             ]
    return <div className="text-center"> 
   
    <div className=" flex justify-center ">
      <img  className="bg-orange-500 w-[350px] sm:w-[300px] sm:h-[200px] object-cover  mt-10 rounded"   src={images[index]}  />
    </div>
    <input className="mr-6 text-7xl" onClick={handprevImage}  type="radio" />
    <input onClick={handlNextImage} type="radio" />

    </div>
} 
export default ImageSlider