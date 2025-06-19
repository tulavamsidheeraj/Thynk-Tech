
import dp from "../../assets/dp.jpg"
const TopBar = ({msg}) => {
  return (
    <div className='flex justify-between mb-4'>
        <div className='text-3xl font-semibold'>
          {msg}
        </div>
        <div className='flex'>
          <div className='content-center flex flex-col justify-start'>
            <img src={dp} alt="dp" className='rounded-full size-10 mr-2'/>
          </div>
          <div className=''>
            <button className='px-10 py-1 bg-blue-900 rounded text-white text-xl'>Logout</button>
          </div>
        </div>
      </div>
  )
}

export default TopBar