import { useState } from "react";

const users = [
    { id: 1, name: "John Doe",leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Pending" },
    { id: 2, name: "Rachel Zane", leaveType:"Casual",DateRange:"19 May to 26 May", reason:"Casual", status:"Pending"},
    { id: 3, name: "Harvey Specter", leaveType:"Earned Leave",DateRange:"01 January to 31 January", reason:"Vacation", status:"Pending" },
    { id: 4, name: "John Doe", leaveType:"Sick",DateRange:"12 June to 31 July", reason:"Sick", status:"Approved"},
    { id: 5, name: "John Doe",leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Travel", status:"Approved" },
    { id: 6, name: "Rachel Zane", leaveType:"Earned Leave",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Pending"},
    { id: 7, name: "Harvey Specter", leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Approved" },
    { id: 8, name: "John Doe", leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Pending"},
    { id: 9, name: "John Doe",leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Travel", status:"Approved" },
    { id: 10, name: "Rachel Zane", leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Rejected"},
    { id: 11, name: "Harvey Specter", leaveType:"Casual",DateRange:"12 May to 31 August", reason:"Personal Reason", status:"Pending" },
    { id: 12, name: "John Doe", leaveType:"Casual",DateRange:"12 May to 31 May", reason:"Personal Reason", status:"Approved"},
    
];

function LeaveFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchLeavetype,setSearchLeaveType] = useState("");
    const [searchDateRange, setSearchDateRange] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    

  const filteredUsers = users.filter((user) => {
    const matchLeaveType = user.leaveType.toLowerCase().includes(searchLeavetype.toLowerCase());
    const matchDateRange = user.DateRange.toLowerCase().includes(searchDateRange.toLowerCase());
    const matchStatus = user.status.toLowerCase().includes(selectedStatus.toLowerCase())
    const matchSearch =user.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchLeaveType && matchDateRange && matchStatus && matchSearch;
  });
  const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);
  return (
    <div>
      <div className="shadow-xl/20 bg-white rounded p-4 my-6">
        <div className="flex mx-4 my-5">
          <div className="text-2xl">Filter Employees</div>
        </div>
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs my-1 text-[#50555C]">Employee name</div>
            <input
              type="text"
              className="border border-slate-400 rounded px-3 py-2.5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}

            />
          </div>
          <div>
            <div className="text-xs my-1 text-[#50555C]">Type</div>
            <input
              type="text"
              className="border border-slate-400 rounded px-3 py-2.5"
              value={searchLeavetype}
              onChange={(e) => setSearchLeaveType(e.target.value)}
              
            />
          </div>
          <div>
            <div className="text-xs my-1 text-[#50555C]">Date</div>
            <input
              type="text"
              className="border border-slate-400 rounded px-3 py-2.5"
              value={searchDateRange}
              onChange={(e) => setSearchDateRange(e.target.value)}
              
            />
          </div>
          <div className="pr-2">
            <div className="text-xs my-1 text-[#50555C]">Status</div>
            <input
              type="text"
              className="border border-slate-400 rounded px-3 py-2.5"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              
            />
          </div>
        </div>
      </div>

      <div className="shadow-xl/20 bg-white rounded p-4 my-6">
        <div className="flex mx-4 my-5">
          <div className="text-2xl">All Employees</div>
        </div>
        <div className="overflow-x-auto">
            <div className="min-w-[1300px]">
                <div className="grid grid-cols-8 m-4 text-xl p-2 font-semibold">
                    <div className="col-span-1">Name</div>
                    <div className="col-span-1">Leave Type</div>
                    <div className="col-span-2">Date Range</div>
                    <div className="col-span-1">Reason</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Actions</div>
                </div>
                <hr className="m-3 text-slate-300" />
                {paginatedUsers.map((employee) => (
                    <div key={employee.id} className="grid grid-cols-8 m-4 text-xl p-2 text-[#8F8F8F] rounded hover:text-white hover:bg-blue-900">
                        <div className="col-span-1">{employee.name}</div>
                        <div className="col-span-1">{employee.leaveType}</div>
                        <div className="col-span-2">{employee.DateRange}</div>
                        <div className="col-span-1">{employee.reason}</div>
                        <div className={`col-span-1 font-medium ${employee.status === "Approved" ? "text-green-600" : employee.status==="Rejected"?"text-red-500":"text-yellow-500"}`}>{employee.status}</div>
                        <div className="col-span-2 text-sm flex gap-1">
                            <button className="h-md w-[100px] rounded text-[#2642AC] font-medium bg-[#D6E1FF] hover:bg-[#002BD1] hover:text-white" type="button">View</button>
                            <button className="h-md w-[100px] rounded text-[#10B981] font-medium bg-[#DAFFF3] hover:bg-[#10B981] hover:text-white" type="button">Approve</button>
                            <button className="h-md w-[100px] rounded text-red-600 font-medium bg-[#FFCCCD] hover:bg-[#DB0004] hover:text-white" type="button">Reject</button>
                        </div>
                    </div>
                ))}
                {filteredUsers.length === 0 && (
                    <div className="text-center text-gray-500 py-4">No matching leaves found.</div>
                )}
            </div>
        </div>      
      </div>
      <div className="flex justify-between items-center gap-2 py-4">
                <div className="text-[#50555C] text-xl content-center">Showing {paginatedUsers.length} out of {users.length}</div>
                <div>
                    <button
                    className="w-[130px] py-4 mr-1 bg-blue-900 text-xl text-white rounded disabled:bg-white disabled:text-[#50555C]"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    >Previous</button>

                    <button
                    className="w-[130px] py-4 ml-1 bg-blue-900 text-xl text-white rounded disabled:bg-white disabled:text-[#50555C]"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage===totalPages}
                    >Next</button>
                </div>
            </div>
    </div>
  );
}

export default LeaveFilter;
