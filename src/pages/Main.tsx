import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import ResumeUpload from "../components/ResumeUpload";
import JobDesc from "../components/JobDesc";
import { Logo, Star } from "../components/core/icons";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import clsx from "clsx";
const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [load, setLoad] = useState(0);
  const [finishedLoading, setFinished] = useState(false);
  useEffect(() => {
    if (loading) {
      const intervalId = setInterval(() => {
        if (load < 100) setLoad(load + 10);
        else {
          clearInterval(intervalId);
          setFinished(true);
          setTimeout(() => {
            navigate("/analyzer");
          }, 2000); // 2 seconds delay
        }
      }, 500);
    }
  }, [loading, load, navigate]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col gap-3 items-center justify-center bg-white">
        <div className="rounded-xl bg-[rgba(224,107,66,0.1)] p-4 relative w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] text-center mb-3">
          <div className="absolute bg-[#99D2C0] -top-5 left-[45%] p-2 rounded-full">
            <Star />
          </div>
          <p className="mt-3 font-bold mb-2 text-lg">Resume Tip</p>
          <p>
            <span className="font-semibold">Optimizing</span> your resume for
            applicant tracking software (ATS) increases your interview
            invitation chances by a whopping 88%
          </p>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#D6D6D6] rounded-full w-[50vw]">
            <div
              className="py-1 bg-[#E06B42]  rounded-full transition-all h-full duration-700"
              style={{ width: `${load}%` }}
            ></div>
          </div>
          <div
            className={clsx(
              finishedLoading ? "text-green-500" : "text-gray-700"
            )}
          >
            {finishedLoading ? <FaCheckCircle /> : <AiOutlineCheckCircle />}
          </div>
        </div>
        <button
          onClick={() => setLoading(false)}
          className="px-5 py-2 rounded-md border  mt-10"
        >
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col items-center pt-16 w-screen h-screen overflow-y-auto z-20 overflow-x-hidden px-5 ">
      <Helmet>
        <title>CV Jury</title>
      </Helmet>
      <div className="absolute left-5 top-5 z-20">
        <Logo />
      </div>
      <div className="hidden sm:block fixed bg-white w-[50%] h-full left-0 top-0"></div>
      <div className="hidden sm:block fixed bg-[rgba(224,107,66,0.2)]  w-[50%] h-screen right-0 top-0"></div>
      <p className="block md:hidden text-center mx-3 font-medium text-3xl sm:text-4xl z-20 ">
        CVJury ATS Resume Checker at Work
      </p>
      <p className="block md:hidden text-center mx-3 font-medium text-xl sm:text-2xl z-20 ">
        Displaying 5 Sets of Results
      </p>
      <div className="hidden md:flex  items-center justify-center gap-1 ml-1">
        <p className="w-[50vw] text-right  font-medium text-3xl sm:text-4xl z-20 ">
          CVJury ATS Resume
        </p>
        <p className="w-[50vw] text-left font-medium text-3xl sm:text-4xl z-20 ">
          Checker at Work
        </p>
      </div>
      <div className="hidden md:flex  items-center justify-center gap-1 ml-1 text-xl sm:text-2xl">
        <p className="w-[50vw] text-right  font-medium  z-20 ">Displaying</p>
        <p className="w-[50vw] text-left font-medium  z-20 ">
          5 Sets of Results
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 items-center z-20  w-full justify-center mt-20 ml-1 ">
        <ResumeUpload />
        <JobDesc />
      </div>
      <button
        onClick={() => setLoading(true)}
        className="my-5 z-20 text-white bg-[#E06B42] px-4 py-2 rounded-full border-[#C7CCD2] border transform transition-transform hover:scale-105"
      >
        Scan for free
      </button>
      <div className="bg-[rgba(255,255,255,0.5)] z-20 shadow-md w-full mx-3 md:w-[80vw] lg:w-[60vw] px-16 py-8 rounded-t-3xl">
        <p className="text-black opacity-100 text-xl md:text-2xl lg:text-3xl">
          The 5 sets of results (from your resume and job description scan):
        </p>
        <ul className="list-decimal pl-6 my-2">
          <li>
            <span className="font-bold">Table 1:</span> Resume hard and soft
            skills (Frequencies)
          </li>
          <li>
            <span className="font-bold">Table 2:</span> Job description hard and
            soft skills (Frequencies)
          </li>
          <li>
            <span className="font-bold">Table 3:</span> Suggested desirable
            skills
          </li>
          <li>
            <span className="font-bold">Table 4:</span> Job description and
            resume compared — Skills Gap Identified
          </li>
          <li>Similarity Score</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
