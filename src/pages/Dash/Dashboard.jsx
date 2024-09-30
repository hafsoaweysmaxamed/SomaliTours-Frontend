import Sidenav from "../../components/SidNav"

function Dashboad(){
    return <div>
    <Sidenav/>
    <div className="sm:flex grid gap-4 sm:gap-20 sm:ml-[30%] mx-10 sm:mr-[4%] py-20">
        <div className="w-[300px] rounded-xl h-[200px]  text-white  bg-[#0F2344]">
            <div className="text-center text-xl font-bold font-Playwrite py-20 px-10">
              <h1>Total</h1>   
              <h1>6+</h1>   
            </div>
        </div>
       
        <div className="w-[300px] rounded-xl h-[200px]  text-white  bg-[#0F2344]">
            <div className="text-center text-xl font-bold font-Playwrite py-20 px-10">
              <h1>Single</h1>   
              <h1>3+</h1>   
            </div>
        </div>
         
        <div className="w-[300px] rounded-xl h-[200px]  text-white  bg-[#0F2344]">
            <div className="text-center text-xl font-bold font-Playwrite py-20 px-10">
             <h1>Frindes</h1>   
             <h1>3+</h1>   
            </div>
        </div>

      
    </div>
    </div> 
}
export default Dashboad