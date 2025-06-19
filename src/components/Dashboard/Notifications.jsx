import React from 'react'

const Notifications = () => {
    const notifications=[
        "⚠️ New leave request from John Doe awaits approval.",
        "ℹ️ Employee onboarding task for Alice Brown is pending",
        "❌ Missing PAN document for Bob Wilson."
    ]
    return (
        <div className="shadow-xl/20 rounded bg-white p-4 my-6">
            <div className="flex justify-between mx-4 my-4">
                <div className="text-2xl">
                    Notifications
                </div>
                <div>
                    See All
                </div>
            </div>
            <hr className="m-2 text-slate-500"/>
            {
                notifications.map((notification,i)=>{
                    return(
                        <div className='flex'>
                            <div className='p-4 font-normal text-xl text-[#8F8F8F] hover:bg-blue-900 hover:text-white rounded w-auto'>
                                {notification}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications