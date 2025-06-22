
const NotificationCard = () => {
  return (
    <div className="bg-[#F4F7FA] rounded px-3 py-6 border-l-5 border-l-[#F4F7FA] hover:border-l-5 hover:border-l-blue-900 ">

        <div className="flex">
            <div className="rounded bg-blue-400 text-blue-900 px-4 py-[7px] text-xs">
                Leave Request
            </div>
        </div>
        <div className="flex justify-between">
            <div className="text-[#50555C]">
                <div className="text-xl pt-2">
                    New leave request from <div className="font-semibold inline text-black">John doe</div> awaits approval
                </div>
                <div className="text-xs">
                    2025/04/15 12:30 A.M
                </div>
            </div>
            <div className="flex gap-6 mr-15">
                <button className='min-w-[80px] my-2 rounded text-blue-900 font-medium bg-blue-200 hover:bg-blue-800 hover:text-white' type='submit'>View</button>
                <button className='min-w-[80px] px-1 my-2 rounded text-[#10B981] font-medium bg-[#DAFFF3] hover:bg-[#10B981] hover:text-white' type='submit'>Mark as read</button>                                  
                <button className='min-w-[80px] my-2 rounded text-red-600 font-medium bg-[#FFCCCD] hover:bg-[#DB0004] hover:text-white' type='submit'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default NotificationCard