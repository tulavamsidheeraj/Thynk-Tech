import TopBar from '../components/Dashboard/TopBar';
import Reminders from '../components/Directory/Reminders';
import Filter from '../components/Directory/Filter';
const Directory = () => {
  return (
    <div className='col-span-4 py-10 px-10 bg-[#F4F7FA]'>
      <TopBar msg={'Employee Directory'}/>
      <Reminders/>
      <Filter/>
    </div>
  )
}

export default Directory