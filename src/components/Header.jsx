import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate(); // Use useNavigate

    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Update to use navigate
        }
    };

    return (
        <div className=''>
          <div className="bg-white sm:flex justify-between font-roboto py-2   ">
                <div className="text-2xl font-semibold ml-4">
                <div className="flex">
      <img className="w-10 h-10 mt-1 rounded-full " src="https://i.pinimg.com/474x/39/63/be/3963bef39cb0d0e754a2db046cc24a2d.jpg"/>
        <h1 className="text-4xl sm:text-4xl font-semibold font-roboto mt-1 "> Somali Tourism</h1>
        </div>
                </div>
                {/* <div className="sm:flex"> */}
                   

                
                    <div style={{ display: isOpen ? "block" : "" }} className='sm:flex hidden gap-8 py-3 text-2xl font-semibold ml-2 sm:ml-14'>
                        <h1 onClick={() => navigate('/')} className="cursor-pointer">Home</h1>

                        <select onChange={handleSelectChange}>
                            <option value="">Pages</option>
                            <option value="/about">About </option>
                            <option value="/Blogs">Blogs</option>
                            <option value="/Tours">service</option>
                           
                        </select>

                        
                        <h1 onClick={() => navigate('/Mogadisho')} className="cursor-pointer">Destinations</h1>
                        
                        <h1 onClick={() => navigate('/Contect')} className="cursor-pointer">Contect</h1>
                        <h1 onClick={() => navigate('/Booking')} className="cursor-pointer">Booking</h1>
                        
                    </div>
                          
                    <div style={{ display: isOpen ? "none" : "block" }}>
                      <i onClick={handleOpen} className="absolute text-3xl right-3 top-4 sm:hidden fa-solid fa-bars"></i>
                    </div>
                     <i onClick={handleClose} style={{ display: isOpen ? "block" : "none" }} className="absolute text-3xl right-3 top-4 fa-solid fa-circle-xmark hidden"></i>

                <div style={{ display: isOpen ? "block" : "" }}className="sm:flex gap-4 hidden">

             {
               <Link to="/Admin"><button className="text-primryColor px-4 py-2 my-2  mr-5 bg-secdaryColor text-2xl rounded font-roboto">Admin</button></Link> 
                }
            </div>
          {/* </div> */}
      </div>
      </div>
                      
    );
}

export default Header;