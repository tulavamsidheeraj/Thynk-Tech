import Card from "./Card"
import Icon from "./Icon"
import cus from "../../assets/icons/clarity_users-solid.png"
import iopa from "../../assets/icons/ic_outline-pending-actions.png"
import lau from "../../assets/icons/la_users.png";
import mpc from "../../assets/icons/mdi_people-check.png";
const Cards = () => {
  return (
    <div className="flex justify-between">
        <Card heading1={"Total"} heading2={"Employees"} count={150} subtext={"+5 this Month"} icon={<Icon source={cus}/>} hoverColor={'[#BCD7FF00]'}></Card>
        <Card heading1={"Active"} heading2={"Employees"} count={110} subtext={"90% Full-Time"} icon={<Icon source={mpc}/>} hoverColor={'[#E2FFE4]'}></Card>
        <Card heading1={"Interns in"} heading2={"Company"} count={10} subtext={"+5 this Month"} icon={<Icon source={lau}/>} hoverColor={'[#FFE2CD]'}></Card>
        <Card heading1={"Pending"} heading2={"Leaves"} count={8} subtext={"2 Urgent"} icon={<Icon source={iopa}/>} hoverColor={'[#FFF4CA]'}></Card>
        
        
    </div>
  )
}

export default Cards