import { IoMdSettings } from "react-icons/io"; 
import { IoIosNotifications } from "react-icons/io"; 
import { AiFillHeart } from "react-icons/ai"; 
import Image  from "../../assets/Image.svg"

import { Input } from 'antd';



const{Search} = Input
const Nav = () => {
  const onSearch = () => {}

  return (
<div className='flex  p-[40px] w-[1440px]  justify-between m-0'>

 <div className="flex gap-20 ">
 <h1 className="text-2xl  font-bold text-[#3563E9]">MORENT</h1>
 <Search  placeholder="input search text" className="max-w-[350px] " onSearch={onSearch} enterButton  />
 </div>


<div className="flex items-center gap-5 text-xl">
<AiFillHeart  />
<IoIosNotifications />
<IoMdSettings />
<img src={Image} alt="" />
</div>



</div>




   
  )
}

export default Nav