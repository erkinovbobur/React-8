import { MdSwapVert } from "react-icons/md"; 
import React from 'react'
import { Button,  } from 'antd';
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import { Radio } from 'antd';
import round from '../../assets/round.svg'

 const Hover = () => {
  return (
   <div className='  w-[1440px] bg-[#C3D4E966] h-[500px]  '>
   <div className=' flex justify-center  '  >
   
   
<div className='w-[640px] h-[100%]    rounded-xl m-0 gap-[30px] flex flex-col   ml-5'>
<h1 className='text-2xl z-30 text-white font-semibold text-[32px] w-[272px] '>The Best Platform <br/> for Car Rental</h1>
<p className='z-30 text-white w-[272px]'> Ease of doing a car rental safely and <br/>  reliably. Of course at a low price.</p>
<div className='flex m-0 z-30'><Button   type="primary">Rental Car</Button></div>
<img className='absolute  w-[600px] ' src={car1} alt="" />
     

   </div>

   <div className='w-[640px] h-[100%]   rounded-xl m-0 gap-[30px] flex flex-col ml-5 '>
   <div></div>
    <h1 className='text-2xl  z-30 text-white font-semibold text-[32px] w-[272px]'  >Easy way to rent a <br/> car at a low price</h1>
  <p className=' z-30 text-white w-[272px]' >Providing cheap car rental services <br/>and safe and comfortable facilities.</p>
   <div className='flex m-0  z-30'><Button   type="primary">Rental Car</Button></div>
   <img className='absolute  w-[600px] ' src={car2}  alt="" />
    
  </div>
   </div>
   <div className='w-full flex items-center mt-[32px] p-[100px]'>
            <div className='flex-1  px-8 py-4 bg-white  shadow-white rounded-[10px]'>
                <div className='flex gap-2 mb-2'>
                    
                    <Radio className='font-semibold'> PickUp</Radio>

                   
                </div>
                    
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='font-bold'>Locations</h3>
                            <p className='font-medium text-gray-400'>Select your city</p>
                        </div>
                    
                        <div>
                            <h3>Date</h3>
                            <p>Select your city</p>
                        </div>
                        
                        <div>
                            <h3>Locations</h3>
                            <p>Select your city</p>
                        </div>
                    </div>
            </div>
            
                <div>
                   <MdSwapVert className="bg-[#3563E9] text-[white] w-[60px] h-[60px] rounded-xl" />
                </div>

            <div className='flex-1 bg-white shadow-white  px-8 py-4 rounded-[10px]'>
                <div className='flex gap-2 mb-2'>
                <Radio className='font-semibold'>Drop - Off </Radio>
                        <h3 className='font-semibold'></h3>
                </div>                        
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Locations</h3>
                                <p className='font-medium text-gray-400'>Select your city</p>
                            </div>
                        
                            <div>
                                <h3>Date</h3>
                                <p>Select your city</p>
                            </div>
                            
                            <div>
                                <h3>Locations</h3>
                                <p>Select your city</p>
                            </div>
                      </div>
            </div>
        </div>



 


    
   
  


  


   </div>
  )
}

export default Hover