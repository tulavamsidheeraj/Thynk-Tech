import React from 'react'
import { useState } from "react";

const users = [
    { id: 1, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
    { id: 2, name: "Rachel Zane", aadhar:"Uploaded",pan:"Uploaded",resume:"Pending"},
    { id: 3, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"},
    { id: 4, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
    { id: 5, name: "Rachel Zane", aadhar:"Uploaded",pan:"Uploaded",resume:"Pending"},
    { id: 6, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"},
    { id: 7, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
    { id: 8, name: "Rachel Zane", aadhar:"Uploaded",pan:"Uploaded",resume:"Pending"},
    { id: 9, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"},
    { id: 10, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
    { id: 11, name: "Rachel Zane", aadhar:"Uploaded",pan:"Uploaded",resume:"Pending"},
    { id: 12, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"},
    { id: 13, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
    { id: 14, name: "Rachel Zane", aadhar:"Uploaded",pan:"Uploaded",resume:"Pending"},
    { id: 15, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"},
];

const FilterDocs = () => {
    const [nameSearch,setNameSearch]=useState("");
    const [searchDocType,setSearchDocType]=useState("");
    const [searchStatus,setSearchStatus]=useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const filteredUsers=users.filter((user)=>{
        const matchName=user.name.toLowerCase().includes(nameSearch.toLowerCase());
        const matchDocType=user.aadhar.toLowerCase().includes(searchDocType.toLowerCase())||user.pan.toLowerCase().includes(searchDocType.toLowerCase())||user.resume.toLowerCase().includes(searchDocType.toLowerCase());

        const matchStatus=user.aadhar.toLowerCase().includes(searchStatus.toLowerCase())||user.pan.toLowerCase().includes(searchStatus.toLowerCase())||user.resume.toLowerCase().includes(searchStatus.toLowerCase())

        return matchName && matchDocType && matchStatus
    })
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
                        value={searchDocType}
                        onChange={(e) => setSearchDocType(e.target.value)}
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
                <div className="text-2xl">Document Status</div>
            </div>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-5 m-4 text-xl p-2 font-semibold">
                    <div className="col-span-1">Name</div>
                    <div className="col-span-1">Employee ID</div>
                    <div className="col-span-1">Aadhaar</div>
                    <div className="col-span-1">PAN</div>
                    <div className="col-span-1">Resume</div>
                </div>
                <hr className="m-3 text-slate-300" />
                {paginatedUsers.map((employee) => (
                    <div key={employee.id} className="grid grid-cols-5 m-4 text-xl p-2 text-[#8F8F8F] roundedhover:text-white hover:bg-blue-900">
                        <div className="col-span-1">{employee.name}</div>
                        <div className='col-span-1'>EMP-{employee.id}</div>
                        <div className={`col-span-1 font-medium ${employee.aadhar === "Uploaded" ? "text-green-600":employee.aadhar==="Missing"?"text-red-500":"text-yellow-500"}`}>{employee.aadhar}</div>
                        <div className={`col-span-1 font-medium ${employee.pan === "Uploaded" ? "text-green-600":employee.pan==="Missing"?"text-red-500":"text-yellow-500"}`}>{employee.pan}</div>
                        <div className={`col-span-1 font-medium ${employee.resume === "Uploaded" ? "text-green-600":employee.resume==="Missing"?"text-red-500":"text-yellow-500"}`}>{employee.resume}</div>
                        </div>
                    )
                )}
                {filteredUsers.length === 0 && (
                    <div className="text-center text-gray-500 py-4">No matching leaves found.</div>
                )}
        </div>      
      </div>


    </div>
  )
}

export default FilterDocs