
const OngoingTasks = ({tasks}) => {
  return (
    <div className='shadow-xl/20 rounded-xl my-9 p-7 bg-white'>
        <div className="text-2xl">
            Ongoing Tasks
        </div>
        <div className="mt-6">
            {
                tasks.map((task,i)=>{
                    return(
                    <div key={i} className="flex justify-between my-2">
                        <div className="text-xl text-gray-400 flex gap-2">
                            <div className="text-black">{"\u2022"}</div> <div>{task.name}</div>
                        </div>
                        <div>
                            {task.status=="Completed"?(
                                <div className='text-green-500 text-xl'>{task.status}</div>
                            ):(
                                <div className='text-yellow-500 text-xl'>{task.status}</div>
                            )}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default OngoingTasks