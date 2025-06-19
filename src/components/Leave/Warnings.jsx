
const Warnings = () => {
  const warningsArray=['New Leave Request From John Doe Awaits Approval .',
        'Hello this is a test warning'
    ]
  return (
    <div className="py-4 my-4">
    {warningsArray.map((warning,i)=>{
           return(<div className="flex"  key={i}> <div className="text-[#720000] bg-[#FFDEDF] px-4 py-3 my-2 rounded shadow-xl/20">{warning}</div></div>)
        })}
    </div>
    )
}

export default Warnings