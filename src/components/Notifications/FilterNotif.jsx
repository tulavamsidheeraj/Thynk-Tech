
import { useState } from "react";
import NotificationCard from "./NotificationCard";
const notifications = [
    {id: 1, name: "John Doe",date:"2025/04/15 9:30 A.M.",notifType:"Leave Request",status:"Approved"},
    {id:2, name:"Jane Smith",date:"2025/04/13 11:30 A.M.", notifType:"Document",doc:"PAN",status:"Pending"},
    {id:3,name:"Tom Clarke", date:"2025/04/12 10:30 A.M.",notifType:"Onboarding",status:"Rejected"},
    {id:4, name: "John Doe",date:"2025/04/15 12:30 A.M.",notifType:"Leave Request",status:"Rejected"},
    {id:5, name:"Jane Smith",date:"2025/04/13 1:30 A.M.", notifType:"Document",doc:"PAN",status:"Approved"},
    {id:6,name:"Tom Clarke", date:"2025/04/12 3:30 P.M.",notifType:"Onboarding",status:"Pending"},
    {id:7, name: "John Doe",date:"2025/04/15 5:30 A.M.",notifType:"Leave Request",status:"Pending"},
    {id:8, name:"Jane Smith",date:"2025/04/13 6:30 P.M.", notifType:"Document",doc:"PAN",status:"Rejected"},
    {id:9,name:"Tom Clarke", date:"2025/04/12 2:30 A.M.",notifType:"Onboarding",status:"Approved"},
    
];

const FilterNotif = () => {
    const [nameSearch,setNameSearch]=useState("");
    const [searchNotifType,setSearchNotifType]=useState("");
    const [searchStatus,setSearchStatus]=useState("");
    

    const filteredUsers=notifications.filter((notification)=>{
        const matchName=notification.name.toLowerCase().includes(nameSearch.toLowerCase());
        const matchNotifType=notification.notifType.toLowerCase().includes(searchNotifType.toLowerCase())
        const matchStatus=notification.status.toLowerCase().includes(searchStatus.toLowerCase())
        return matchName && matchNotifType && matchStatus
    })
    



  return (
    <div>
        <div className="shadow-xl/20 bg-white rounded p-4 my-6">
            <div className="flex mx-4 my-5">
                <div className="text-2xl">Filter Employees</div>
            </div>
            <div className="flex justify-start flex-wrap gap-4">
                <div className='mr-15'>
                        <div className="text-xs my-1 text-[#50555C]">Employee name</div>
                        <input
                          type="text"
                  className="border border-slate-400 rounded px-3 py-2.5"
                  value={nameSearch}
                          onChange={(e) => setNameSearch(e.target.value)}
                        />
                </div>
                <div className='mr-15'>
                    <div className="text-xs my-1 text-[#50555C]">Document Type</div>
                    <input
                        type="text"
                        className="border border-slate-400 rounded px-3 py-2.5"
                        value={searchNotifType}
                        onChange={(e) => setSearchNotifType(e.target.value)}
                    />
                </div>
                <div>
                    <div className="text-xs my-1 text-[#50555C]">Status</div>
                    <input
                        type="text"
                        className="border border-slate-400 rounded px-3 py-2.5"
                        value={searchStatus}
                        onChange={(e) => setSearchStatus(e.target.value)}
                    />
                </div>
            </div>
        </div>


        <div className="shadow-xl/20 bg-white rounded p-4 my-6">
            <div className="flex mx-4 my-5">
                <div className="text-2xl">All Notifications</div>
            </div>
            <div className="ml-6">Today</div>
            <div>
                <NotificationCard/>
            </div>      
      </div>
    </div>
  )
}

export default FilterNotif