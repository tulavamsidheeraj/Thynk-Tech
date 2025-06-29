import React from 'react'

const LeaveHistory = ({leaves}) => {
  return (
    <div className='shadow-xl/20 rounded-xl my-9 p-7 bg-white'>
        <div className='flex justify-between'>
            <div className='text-2xl'>Leave History</div>
            <div className='border border-slate-400 rounded p-1'>
                <select name="Month" id="month">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-5 mt-6 mb-3 text-blue-600'>
            <div>Leave type</div>
            <div>Date</div>
            <div>Reason</div>
            <div>Status</div>
            <div>Remarks</div>
        </div>
        <hr className='text-slate-400'/>
        {leaves.map((leave,i)=>{
            return(
                <div className='grid grid-cols-5 my-4 text-slate-600' key={i}>
                    <div>{leave.leaveType}</div>
                    <div>{leave.date}</div>
                    <div>{leave.reason}</div>
                    <div>{leave.status}</div>
                    <div>{leave.remarks==""?"-------":leave.remarks}</div>
                </div>
            )
        })}
        <div className='mt-2'>
            Total leaves taken - {leaves.length}
        </div>
    </div>
  )
}

export default LeaveHistory