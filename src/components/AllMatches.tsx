import React from "react";
import Table from "./core/Table";
import LinearProgressBar from "./core/LinearProgressBar";
import ColouredTable from "./core/ColouredTable";


const AllMatches: React.FC<AllMatchesProps> = ({
  atsData,
  atsTabs,
  hardSkillsData,
  hardSkillsTabs,
  salesData,
  salesTabs,
  softSkillsData,
  softSkillsTabs,
  softSkillsList,
}) => {
  return (
    <div className="relative ">
      <div className="sticky top-0 left-0 w-[70px] z-30">
        {/* This is fixed */}
        <a href={'#ats'} className="side-item bg-red-500 rounded-tr-md">
          ATM
        </a>
        <a href={'#sim'} className="side-item bg-green-500">
          SIM
        </a>
        <a href={'#hsm'} className="side-item bg-blue-500">
          HSM
        </a>
        <a href={'#ssm'} className="side-item bg-gray-500   rounded-br-md">
          SSM
        </a>
      </div>
      <div className="my-20 px-5 md:px-12 lg:px-24" id="ats">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xl md:text-3xl lg:text-4xl text-[#6A6A6A] font-semibold my-4">
            ATS Best Practices Match (ATS)
          </p>
          <div className="w-full md:w-[30%]">
            <p className="text-right  text-xl">25/30</p>
            <LinearProgressBar score={70} />
          </div>
        </div>
        <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px] my-5">
          Maximize your chances of getting hired by ensuring your resume passes
          the 10 ATS best practices factors assessment.<br /> To stand a better
          chance, your resume must score 80% or higher and include crucial
          elements such as biodata, job title, contact information, a LinkedIn
          profile, relevant subheadings, and an optimized file type. <br />Make the
          process simple and efficient using our LIVE editor dashboard to revise
          your resume based on the scanner’s recommendations.
        </p>
        <div className="my-10 overflow-x-scroll">
          <ColouredTable tabs={atsTabs} data={atsData} />
        </div>
      </div>

      <div className="my-20 px-5 md:px-12 lg:px-24" id="sim">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xl md:text-3xl lg:text-4xl text-[#6A6A6A] font-semibold my-4">
            Sales Index Match (SIM)
          </p>
          <div className="w-full md:w-[30%]">
            <p className="text-right  text-xl">15/30</p>
            <LinearProgressBar score={60} />
          </div>
        </div>
        <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px] my-5">
          We use this to assess your resume word count, measurable results
          present, active verbs present, and the presence of clichés and
          buzzwords.
        </p>
        <div className="my-10 overflow-x-scroll">
          <ColouredTable tabs={salesTabs} data={salesData} />
        </div>
      </div>
      <div className="my-20 px-5 md:px-12 lg:px-24" id="hsm">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xl md:text-3xl lg:text-4xl text-[#6A6A6A] font-semibold my-4">
            Hard Skills Match (HSM)
          </p>
          <div className="w-full md:w-[30%]">
            <p className="text-right  text-xl">28/30</p>
            <LinearProgressBar score={70} />
          </div>
        </div>
        <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px]my-5">
          Most resumes include only 60% of the necessary hard skills compared to
          the target job description. <br />Examples of hard skills are Excel, NodeJS,
          SQL, JavaScript, accounting, engineering, medicine, teaching, etc.
          <br />They are generally technical, software mastery, and professional
          skills learned to qualify for a job. <br />They determine whether you should
          apply for the role in the first place.
        </p>
        <div className="my-20 overflow-x-scroll">
          <Table tabs={hardSkillsTabs} data={hardSkillsData} headBg="#E1ECF6" />
        </div>
      </div>
      <div className="my-20 px-5 md:px-12 lg:px-24" id="ssm">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xl md:text-3xl lg:text-4xl text-[#6A6A6A] font-semibold my-4">
            Soft Skills Match (SSM)
          </p>
          <div className="w-full md:w-[30%]">
            <p className="text-right  text-xl">5/30</p>
            <LinearProgressBar score={16} />
          </div>
        </div>
        <p className="text-lg mt-5">
          Only 28% of resumes contain the necessary soft skills. <br />These are
          essential soft skills everyone needs to succeed at work.<br /> Here are the
          top ten in-demand soft skills:
        </p>
        <ul className="list-disc text-base pl-10 my-3">
          {softSkillsList.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <p className="text-lg">
          And CVJury's 24 <span className="underline text-[#E06B42]">soft skill</span>{" "}
          classifications
        </p>
        <div className="my-20 overflow-x-scroll">
          <Table tabs={softSkillsTabs} data={softSkillsData} headBg="#EBEBEB" />
        </div>
      </div>
    </div>
  );
};

export default AllMatches;
