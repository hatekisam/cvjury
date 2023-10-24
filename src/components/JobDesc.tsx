import React from 'react'
import { DeleteIcon } from './core/icons'

const JobDesc = () => {
    return (
        <div className='w-full  sm:w-[50%] flex justify-between'>
            <div className='w-full md:w-[80%] lg:w-[65%] text-center' >
                <p className='text-[#6A6A6A] text-3xl'>Job Description</p>
                <div className="p-5 border-dashed border-2 border-black rounded-3xl ">
                    <input type="text" placeholder='Enter Job Title' className='border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full  outline-none ' />
                    <div className="mt-5">
                        <textarea className='border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full resize-none outline-none h-[200px]' placeholder='Or paste your resume here'></textarea>
                    </div>
                    <div className="flex mt-1 justify-between">
                        <div></div>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <div className='md:w-[20%] lg:w-[35%]'></div>
        </div>
    )
}

export default JobDesc