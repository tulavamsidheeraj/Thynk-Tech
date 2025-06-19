import React from 'react'
import TopBar from '../components/Dashboard/TopBar';
import Cards from '../components/Dashboard/Cards';
import LeaveRequests from '../components/Dashboard/LeaveRequests';
import Notifications from '../components/Dashboard/Notifications';
const Dashboard = () => {
  return (
    <div className='col-span-4 py-10 px-10 bg-[#F4F7FA]'>
      <TopBar msg={'Welcome , UserName!'}/>
      <Cards/>
      <LeaveRequests/>
      <Notifications/>
      
    </div>
  )
}

export default Dashboard