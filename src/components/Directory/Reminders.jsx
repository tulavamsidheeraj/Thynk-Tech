
const Reminders = () => {
    const reminderArray=['3 employees have missing documents.',
        'Hello this is a test reminder'
    ]
  return (
    <div className="py-4 my-4">
    {reminderArray.map((reminder,i)=>{
           return(<div className="flex"  key={i}> <div className="text-[#720000] bg-[#FFDEDF] px-4 py-3 my-2 rounded shadow-xl/20">Reminder: {reminder}</div></div>)
        })}
    </div>
  )
}

export default Reminders