import React from "react";
import Helmet from "react-helmet";
import ResumeUpload from "../components/ResumeUpload";
import JobDesc from "../components/JobDesc";
import { Logo } from "../components/core/icons";
const Main: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-16 w-screen h-screen overflow-y-auto sm:overflow-hidden px-5 ">
      <Helmet>
        <title>CV Jury</title>
      </Helmet>
      <div className="absolute left-5 top-5 z-20">
        <Logo />
      </div>
      <div className="hidden sm:block absolute bg-white w-[50%] h-full left-0 top-0"></div>
      <div className="hidden sm:block absolute bg-[rgba(224,107,66,0.2)]  w-[50%] h-full right-0 top-0"></div>
      <p className="font-medium text-3xl sm:text-4xl z-20 ">
        CVJury ATS Resume Checker at Work
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center z-20  w-full justify-center mt-20">
        <ResumeUpload />
        <JobDesc />
      </div>
      <button className="my-3 z-20 text-white bg-[#E06B42] px-4 py-2 rounded-full  border-[#C7CCD2] border">
        Scan for free
      </button>
    </div>
  );
};

export default Main;
