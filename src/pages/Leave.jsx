import TopBar from "../components/Dashboard/TopBar"
import Warnings from "../components/Leave/Warnings"
import LeaveFilter from "../components/Leave/LeaveFilter";
const Leave = () => {
  return (
    <div className="col-span-4 py-10 px-10 bg-[#F4F7FA]">
      <TopBar msg={'Leave Requests'}></TopBar>
      <Warnings></Warnings>
      <LeaveFilter></LeaveFilter>
    </div>
  )
}

export default Leave