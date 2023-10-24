import React from 'react'
import Helmet from "react-helmet"
const Main: React.FC = () => {
	return (
		<div className='relative flex flex-col items-center py-16 w-screen h-screen overflow-hidden'>
			<Helmet>
				<title>CV Jury</title>
			</Helmet>
			<div className="absolute bg-white w-[50%] h-full left-0 top-0"></div>
			<div className="absolute bg-[rgba(224,107,66,0.2)]  w-[50%] h-full right-0 top-0"></div>
			<p className="font-medium text-4xl z-20 ">CVJury ATS Resume Checker at Work</p>
			<div className="flex gap-5 items-center z-20  w-full justify-center mt-20">
				<div className='w-[50%] flex justify-between'>
					<div className='w-[50%]'></div>
					<div className='w-[50%] text-center' >
						<p className='text-[#6A6A6A] text-3xl'>Resume</p>
						<div className="p-5 border-dashed border-2 border-black rounded-3xl ">Resume</div>
					</div>
				</div>
				<div className='w-[50%] flex justify-between'>
					<div className='w-[50%] text-center' >
						<p className='text-[#6A6A6A] text-3xl'>Job Description</p>
						<div className="p-5 border-dashed border-2 border-black rounded-3xl ">Resume</div>
					</div>
					<div className='w-[50%]'></div>
				</div>
			</div>
		</div>
	)
}

export default Main