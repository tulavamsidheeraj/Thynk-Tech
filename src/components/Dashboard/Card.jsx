
const Card = ({heading1,heading2,count,subtext,icon,hoverColor}) => {
  return (
    <div className={`shadow-xl/20 my-7 p-2 flex rounded-lg bg-stone-100 hover:${hoverColor}`}>
            <div className="py-3">
                <div className="text-xl font-normal">
                    {heading1}
                </div>
                <div className="text-xl font-normal">
                    {heading2}
                </div>
                <div className="text-2xl font-semibold pt-1 text-blue-900">
                    {count}
                </div>
                <div className="text-xs font-light text-[#50555C]">
                    {subtext}
                </div>
            </div>
            <div className="content-center ml-10 mr-5">{icon}</div>
        </div>
  )
}

export default Card