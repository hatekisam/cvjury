import React from 'react'
import FileDropZone from './FileDrop'

const ResumeUpload = () => {
    const handleFiles = (files: File[]) => {
        console.log(files);
      };
    return (
        <div className='w-[50%] flex justify-between'>
            <div className='w-[40%]'></div>
            <div className='w-[65%] text-center' >
                <p className='text-[#6A6A6A] text-3xl'>Resume</p>
                <div className="p-5 border-dashed border-2 border-black rounded-3xl ">
                    <FileDropZone onFilesSelected={handleFiles} />
                </div>
            </div>
        </div>
    )
}

export default ResumeUpload