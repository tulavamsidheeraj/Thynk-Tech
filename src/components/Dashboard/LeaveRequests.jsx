
const LeaveRequests = () => {
    const leaveList=[
        {
            employee:"Julia",
            leaveType:"Casual",
            date:"25 April to 1 May",
            status:"Pending"
        },
        {
            employee:"John",
            leaveType:"Sick Leave",
            date:"15 April to 15 May",
            status:"Approved"
        },
        {
            employee:"Julia",
            leaveType:"Casual",
            date:"25 April to 1 May",
            status:"Pending"
        },
        {
            employee:"John",
            leaveType:"Sick Leave",
            date:"15 April to 15 May",
            status:"Approved"
        }
    ]
  return (
    <div className="shadow-xl/20 rounded p-4 my-6 bg-white">
        <div className="flex justify-between mx-4 my-5">
            <div className="text-2xl">
                Recent Leave Requests
            </div>
            <div>
                See All
            </div>
        </div>
        <div className="grid grid-cols-7 gap-1 m-4 text-xl">
            <div className="col-span-1 ">Employee</div>
            <div className="col-span-1">LeaveType</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Actions</div>
        </div>
        <hr className="m-2 text-slate-500"/>
            {
                leaveList.map((leave,i)=>{
                    if(leave.status==="Pending"){
                        return(
                            <div className="grid grid-cols-7 gap-1 m-4 text-xl p-2 text-[#8F8F8F] rounded hover:text-white hover:bg-blue-900" key={i}>
                                <div className="col-span-1 ">
                                    {leave.employee}
                                </div>
                                <div className="col-span-1">
                                    {leave.leaveType}
                                </div>
                                <div className="col-span-2 ">
                                    {leave.date}
                                </div>
                                <div className="col-span-1 text-[#E5A400]">
                                    {leave.status}
                                </div>
                                
                                <div className="col-span-2 text-sm flex gap-1">
                                    <button className='h-md w-3xs rounded text-[#10B981] font-medium bg-[#DAFFF3] hover:bg-[#10B981] hover:text-white' type='submit'>Approve</button>
                                    <button className='h-md w-3xs rounded text-red-600 font-medium bg-[#FFCCCD] hover:bg-[#DB0004] hover:text-white' type='submit'>Reject</button>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="grid grid-cols-7 gap-1 m-4 text-xl p-2 rounded text-[#8F8F8F] hover:bg-blue-900  hover:text-white">
                                <div className="col-span-1 ">
                                    {leave.employee}
                                </div>
                                <div className="col-span-1 ">
                                    {leave.leaveType}
                                </div>
                                <div className="col-span-2  ">
                                    {leave.date}
                                </div>
                                <div className="col-span-1 text-[#10B981]">
                                    {leave.status}
                                </div>
                                <div className="col-span-1 text-sm flex">
                                    <button className='h-md w-3xs rounded text-[#2642AC] font-medium bg-[#D6E1FF] hover:bg-[#002BD1] hover:text-white' type='submit'>View</button>
                                </div>
                            </div>
                        )
                    }
                }
            )}
        

    </div>
  )
}

export default LeaveRequests