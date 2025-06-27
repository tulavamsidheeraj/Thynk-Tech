import { useParams } from "react-router-dom";
import TopBar from "../components/Dashboard/TopBar";
import PersonalInformation from "../components/EmployeeDetail/PersonalInformation";
import LeaveHistory from "../components/EmployeeDetail/LeaveHistory";
import DocumentStatus from "../components/EmployeeDetail/DocumentStatus";
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

const leaves=[{ id: 1, leaveType:"Casual",date:"19.May.2024", reason:"Casual", status:"Pending", remarks:"Go and chill out"},
    { id: 1, leaveType:"Earned Leave",date:"01.January.2024", reason:"Vacation", status:"Pending", remarks:"" },
    { id: 1, leaveType:"Sick",date:"12.June.2024", reason:"Sick", status:"Approved", remarks:"Please provide medical certificate"},
    { id: 1,leaveType:"Casual",date:"12.May.2024", reason:"Travel", status:"Approved", remarks:"travel the world in 2 days" },
    ]
const documents=[{ id: 1, name: "John Doe",aadhar:"Uploaded",pan:"Pending",resume:"Missing"},
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
    { id: 15, name: "Harvey Specter", aadhar:"Missing",pan:"Uploaded",resume:"Missing"}
]



const EmployeeDetail = () => {
    const {empId}=useParams()
    const user=users.find((u)=>{
        return u.id==empId
    })
    const doc=documents.find((u)=>{
        return u.id==empId
    })

  return (
    <div className="col-span-4 py-10 px-10 bg-[#F4F7FA]">
        <TopBar msg={`Employee Detail-${user.name}`}></TopBar>
        <PersonalInformation user={user}/>
        <LeaveHistory leaves={leaves}></LeaveHistory>
        <DocumentStatus doc={doc}></DocumentStatus>
    </div>
  )
}

export default EmployeeDetail