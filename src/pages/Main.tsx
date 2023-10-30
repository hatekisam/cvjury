import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import ResumeUpload from "../components/ResumeUpload";
import JobDesc from "../components/JobDesc";
import { Logo } from "../components/core/icons";
import { useNavigate } from "react-router-dom";
const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [load, setLoad] = useState(0);
  useEffect(() => {
    if (loading) {
      const intervalId = setInterval(() => {
        if (load < 100) setLoad(load + 10);
        else {
          clearInterval(intervalId);
          navigate("/analyzer");
        }
      }, 500);
    }
  }, [loading, load, navigate]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="bg-[#D6D6D6] rounded-full w-[50vw]">
          <div
            className="py-1 bg-[#E06B42]  rounded-full transition-all duration-700"
            style={{ width: `${load}%` }}
          ></div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col items-center pt-16 w-screen h-screen overflow-y-auto  px-5 ">
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
      <div className="flex flex-col sm:flex-row gap-20 items-center z-20  w-full justify-center mt-20 ">
        <ResumeUpload />
        <JobDesc />
      </div>
      <button
        onClick={() => setLoading(true)}
        className="my-5  z-20 text-white bg-[#E06B42] px-4 py-2 rounded-full  border-[#C7CCD2] border"
      >
        Scan for free
      </button>
      <div className="bg-[rgba(255,255,255,0.5)] z-20 shadow-md w-full mx-3 md:w-[80vw] lg:w-[60vw] p-5 rounded-t-3xl">
        <p className="text-black opacity-100 text-xl md:text-2xl lg:text-3xl">
          The 5 sets of results (from your resume and job description scan):
        </p>
        <ul className="list-decimal pl-6 my-2">
          <li>Table 1: Resume hard and soft skills (Frequencies)</li>
          <li>Table 2: Job description hard and soft skills (Frequencies)</li>
          <li>Table 3: Suggested desirable skills</li>
          <li>
            Table 4: Job description and resume compared — Skills Gap Identified
          </li>
          <li>Similarity Score</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
