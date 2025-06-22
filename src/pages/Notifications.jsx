import TopBar from "../components/Dashboard/TopBar"
import FilterNotif from "../components/Notifications/FilterNotif"
const Notifications = () => {
  return (
    <div className="col-span-4 py-10 px-10 bg-[#F4F7FA]">
      <TopBar msg={"Notifications"}></TopBar>
      <FilterNotif/>
    </div>

  )
}

export default Notifications