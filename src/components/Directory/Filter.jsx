import { useState } from "react";

const users = [
    { id: 1, name: "John Doe", email:"johndoe@company.com",department:"Engineering", role:"Intern",designation:"Software Engineer",joiningDate:"2024/12/01",status:"Active" },
    { id: 2, name: "Rachel Zane", email:"rzane@company.com",department:"HR", role:"Full Time",designation:"Partner",joiningDate:"2014/12/01",status:"Active" },
    { id: 3, name: "Harvey Specter", email:"harveys@company.com",department:"Marketing", role:"Part Time",designation:"Product Manager",joiningDate:"2024/11/01",status:"Inactive" },
    { id: 4, name: "John Doe", email:"johndoe@company.com",department:"Engineering", role:"Intern",designation:"Software Engineer",joiningDate:"2024/12/01",status:"Active" },
    { id: 5, name: "Rachel Zane", email:"rzane@company.com",department:"HR", role:"Full Time",designation:"Partner",joiningDate:"2014/12/01",status:"Active" },
    { id: 6, name: "Harvey Specter", email:"harveys@company.com",department:"Marketing", role:"Part Time",designation:"Product Manager",joiningDate:"2024/11/01",status:"Inactive" },
    { id: 7, name: "John Doe", email:"johndoe@company.com",department:"Engineering", role:"Intern",designation:"Software Engineer",joiningDate:"2024/12/01",status:"Active" },
    { id: 8, name: "Rachel Zane", email:"rzane@company.com",department:"HR", role:"Full Time",designation:"Partner",joiningDate:"2014/12/01",status:"Active" },
    { id: 9, name: "Harvey Specter", email:"harveys@company.com",department:"Marketing", role:"Part Time",designation:"Product Manager",joiningDate:"2024/11/01",status:"Inactive" },
    { id: 10, name: "John Doe", email:"johndoe@company.com",department:"Engineering", role:"Intern",designation:"Software Engineer",joiningDate:"2024/12/01",status:"Active" },
    { id: 11, name: "Rachel Zane", email:"rzane@company.com",department:"HR", role:"Full Time",designation:"Partner",joiningDate:"2014/12/01",status:"Active" },
    { id: 12, name: "Harvey Specter", email:"harveys@company.com",department:"Marketing", role:"Part Time",designation:"Product Manager",joiningDate:"2024/11/01",status:"Inactive" },
    
];

function Filter() {
  const [selectedRole, setSelectedRole] = useState("All roles");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("Both");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

    

  const filteredUsers = users.filter((user) => {
    const matchRole = selectedRole === "All roles" || user.role === selectedRole;
    const matchDepartment = selectedDepartment === "All Departments" || user.department === selectedDepartment;
    const matchStatus = selectedStatus === "Both" || user.status === selectedStatus;
    const matchSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRole && matchDepartment && matchStatus && matchSearch;
  });
  const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);
  return (
    <div>
      <div className="shadow-xl/20 rounded bg-white p-4 my-6">
        <div className="flex mx-4 my-5">
          <div className="text-2xl">Filter Employees</div>
        </div>
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs my-1 text-[#50555C]">Search</div>
            <input
              type="text"
              className="border border-slate-400 rounded px-3 py-2.5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search name or email"
            />
          </div>
          <div>
            <div className="text-xs my-1 text-[#50555C]">Role</div>
            <select
                id={'role'}
              className="border border-slate-400 rounded py-2.5 pr-17"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {["All roles", "Intern", "Full Time", "Part Time"].map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="text-xs my-1 text-[#50555C]">Department</div>
            <select
                id={"department"}
              className="border border-slate-400 rounded py-2.5 pr-17"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {["All Departments", "Engineering", "Marketing", "HR"].map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div className="pr-2">
            <div className="text-xs my-1 text-[#50555C]">Status</div>
            <select
                id={'status'}
              className="border border-slate-400 rounded py-2.5 pr-17"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {["Both", "Active", "Inactive"].map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="shadow-xl/20 rounded bg-white p-4 my-6">
        <div className="flex mx-4 my-5">
          <div className="text-2xl">All Employees</div>
        </div>
        <div className="overflow-x-auto">
            <div className="min-w-[1800px]">
                <div className="grid grid-cols-10 m-4 text-xl p-2 font-semibold">
                    <div className="col-span-1">Name</div>
                    <div className="col-span-2">E-mail</div>
                    <div className="col-span-1">Department</div>
                    <div className="col-span-1">Designation</div>
                    <div className="col-span-1">Joining Date</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Actions</div>
                </div>
                <hr className="m-2 text-slate-500" />
                {paginatedUsers.map((employee, i) => (
                    <div key={employee.id} className="grid grid-cols-10 m-4 text-xl p-2 text-[#8F8F8F] rounded hover:text-white hover:bg-blue-900">
                        <div className="col-span-1">{employee.name}</div>
                        <div className="col-span-2">{employee.email}</div>
                        <div className="col-span-1">{employee.department}</div>
                        <div className="col-span-1">{employee.designation}</div>
                        <div className="col-span-1">{employee.joiningDate}</div>
                        <div className={`col-span-1 font-medium ${employee.status === "Active" ? "text-green-600" : "text-red-600"}`}>{employee.status}</div>
                        <div className="col-span-2 text-sm flex gap-1">
                            <button className="h-md w-[100px] rounded text-white font-medium bg-[#3771C8]" type="button">View</button>
                            <button className="h-md w-[100px] rounded text-white font-medium bg-[#0093AD]" type="button">Edit</button>
                            <button className="h-md w-[100px] rounded text-white font-medium bg-[#FF6B00]" type="button">Delete</button>
                        </div>
                    </div>
                ))}
                {filteredUsers.length === 0 && (
                    <div className="text-center text-gray-500 py-4">No matching employees found.</div>
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

export default Filter;
