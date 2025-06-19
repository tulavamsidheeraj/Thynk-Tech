import TopBar from "../components/Dashboard/TopBar"
import Warn from "../components/DocTracker/Warnings"
import FilterDocs from "../components/DocTracker/FilterDocs"
const DocTracker = () => {
  return (
    <div className="col-span-4 py-10 px-10 bg-[#F4F7FA]">
      <TopBar msg={'Document Tracker'}></TopBar>
      <Warn/>
      <FilterDocs></FilterDocs>
    </div>
  )
}

export default DocTracker