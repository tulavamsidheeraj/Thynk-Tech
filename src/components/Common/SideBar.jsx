import logo from "../../assets/design-3.png"
import { Link } from "react-router-dom";
const SideBar = () => {
    const links=[
        {
            title:"Dashboard",
            link:"/"
        },
        {
            title:"Employee Directory",
            link:"/employee"
        },
        {
            title:"Leave Requests",
            link:"/leave"
        },
        {
            title:"Document Tracker",
            link:"/documents"
        },
        {
            title:"Analytics",
            link:"/"
        },
        {
            title:"Notifications",
            link:"/notifications"
        },

    ]
  return (
    <div className="bg-blue-900 h-auto min-h-screen min-w-1/5 flex-col">
        <div className="flex justify-center">
            <img src={logo} alt="logo" className="size-40 mt-4"/>
        </div>
        <div>
            <div className="pl-8 flex flex-col">
                {
                    links.map((items,i)=>(
                        <Link to={items.link} className="text-white text-2xl bg-blue-900 flex" key={i}>
                            <div className=" p-4 m-2 bg-[#1E3A8A] hover:bg-[#2A4CAC] rounded-xl">
                                {items.title}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar