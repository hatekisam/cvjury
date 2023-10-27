import React from "react";
import Helmet from "react-helmet";
import ResumeUpload from "../components/ResumeUpload";
import JobDesc from "../components/JobDesc";
import { Logo } from "../components/core/icons";
const Main: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-16 w-screen h-screen overflow-y-auto  px-5 ">
      <Helmet>
        <title>CV Jury</title>
      </Helmet>
      <div className="absolute left-5 top-5 z-20">
        <Logo />
      </div>
      <div className="hidden sm:block fixed bg-white w-[50%] h-full left-0 top-0"></div>
      <div className="hidden sm:block fixed bg-[rgba(224,107,66,0.2)]  w-[50%] h-screen right-0 top-0"></div>
      <p className="font-medium text-3xl sm:text-4xl z-20 ">
        CVJury ATS Resume Checker at Work
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center z-20  w-full justify-center mt-20">
        <ResumeUpload />
        <JobDesc />
      </div>
      <button className="my-5  z-20 text-white bg-[#E06B42] px-4 py-2 rounded-full  border-[#C7CCD2] border">
        Scan for free
      </button>
	  <div className="bg-white opacity-50 shadow-md w-[60vw] p-5 rounded-3xl">
		<p className="text-black text-3xl">The 5 sets of results (from your resume and job description scan):</p>
		<ul className="list-decimal pl-6 my-2">
			<li>Table 1: Resume hard and soft skills (Frequencies)</li>
			<li>Table 2: Job description hard and soft skills (Frequencies)</li>
			<li>Table 3: Suggested desirable skills</li>
			<li>Table 4: Job description and resume compared — Skills Gap Identified</li>
			<li>Similarity Score</li>
		</ul>
	  </div>
    </div>
  );
};

export default Main;
