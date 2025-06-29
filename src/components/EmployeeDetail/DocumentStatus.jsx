import React from 'react'

const DocumentStatus = ({doc}) => {
  return (
    <div className='shadow-xl/20 rounded-xl my-9 p-7 bg-white'>
        <div className='text-2xl '>
            Document Status
        </div>
        <div className='grid grid-cols-3 mt-6 mb-3 text-blue-600'>
            <div>Document</div>
            <div>Status</div>
            <div>Action</div>
        </div>
        <hr className='text-slate-400'/>
        <div className='grid grid-cols-3 mt-6 mb-3'>
            <div>Aadhaar</div>
            <div>{doc.aadhar=="Uploaded"?(
                <div className='text-green-600'>{doc.aadhar}</div>
                ):(
                <div className='text-red-600'>{doc.aadhar}</div>
                )}
            </div>
            <div>
                {doc.aadhar=="Uploaded"?(
                    <div className=''>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 mr-1'>
                            View
                        </button>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 ml-1'>
                            Download
                        </button>
                    </div>
                ):(
                    <div>
                        <button className='rounded bg-[#FFE0CA] text-[#FF6B00] px-5 py-1 hover:text-white hover:bg-[#FF6B00]'>Notify</button>
                    </div>
                )}
            </div>
        </div>
        <div className='grid grid-cols-3 mt-6 mb-3'>
            <div>PAN</div>
            <div>{doc.pan=="Uploaded"?(
                <div className='text-green-600'>{doc.pan}</div>
                ):(
                <div className='text-red-600'>{doc.pan}</div>
                )}
            </div>
            <div>
                {doc.pan=="Uploaded"?(
                    <div className=''>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 mr-1'>
                            View
                        </button>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 ml-1'>
                            Download
                        </button>
                    </div>
                ):(
                    <div>
                        <button className='rounded bg-[#FFE0CA] text-[#FF6B00] px-5 py-1 hover:text-white hover:bg-[#FF6B00]'>Notify</button>
                    </div>
                )}
            </div>
        </div>
        <div className='grid grid-cols-3 mt-6 mb-3'>
            <div>Resume</div>
            <div>{doc.resume=="Uploaded"?(
                <div className='text-green-600'>{doc.resume}</div>
                ):(
                <div className='text-red-600'>{doc.resume}</div>
                )}
            </div>
            <div>
                {doc.resume=="Uploaded"?(
                    <div className=''>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 mr-1'>
                            View
                        </button>
                        <button className='rounded bg-blue-300 text-blue-800 px-5 py-1 hover:text-white hover:bg-blue-800 ml-1'>
                            Download
                        </button>
                    </div>
                ):(
                    <div>
                        <button className='rounded bg-[#FFE0CA] text-[#FF6B00] px-5 py-1 hover:text-white hover:bg-[#FF6B00]'>Notify</button>
                    </div>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default DocumentStatus