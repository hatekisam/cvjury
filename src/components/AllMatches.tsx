import React, { useState } from "react";
import Table from "./core/Table";
import LinearProgressBar from "./core/LinearProgressBar";
import ColouredTable from "./core/ColouredTable";
import { AiOutlineCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { CloseModal, CopyLink } from "./core/icons";

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
  const [modal, setModal] = useState({ status: false, err: false });
  return (
    <div
      className="relative "
      onClick={() => {
        if (modal.status) setModal({ status: false, err: false });
      }}
    >
      <div className="flex flex-col md:flex-row ">
        <div className="hidden md:block relative pt-20">
          <div className="sticky top-0 left-0 w-[100px] z-30">
            {modal.status && (
              <div className="hidden md:block absolute h-[350px] w-[350px]  left-[110%] top-[50%]  rounded-md  ">
                {modal.err ? (
                  <div className="h-full">
                    <div className="relative bg-white border border-[#E06B42]  h-full w-full rounded-lg rounded-br-none shadow-md">
                      <div className="absolute top-[100%] -right-0  bg-white rounded-b-md border-[#E06B42] border-t-0 border">
                        <button className="flex px-2 py-1.5 hover:bg-[#FDEFEB] items-center gap-2 rounded-b-md w-full text-sm text-[#E06B42]">
                          <CopyLink />
                          <p className="text-[#E06B42]">Copy the link</p>
                        </button>
                      </div>
                      <div className="flex items-center justify-end px-4 pt-2 bg-none ">
                        <button
                          onClick={() =>
                            setModal({ status: false, err: false })
                          }
                        >
                          <CloseModal />
                        </button>
                      </div>
                      <div className="p-4 text-sm">
                        Actually there are 2, one is the one you saw, this is
                        the other! <br />
                        <br /> When there's ZERO errors found. Pls, not all
                        these tiny details and pay attention and finish 1 time!
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center flex-col gap-3 text-green-500 justify-center h-full  p-4 bg-white rounded-md relative border border-[#E06B42]">
                    <div className="absolute right-1 top-1 flex items-center justify-end px-4 pt-2 bg-none">
                      <button
                        onClick={() => setModal({ status: false, err: false })}
                      >
                        <CloseModal />
                      </button>
                    </div>
                    <AiOutlineCheckCircle size={50} />
                    <p className="text-black">No error(s) found</p>
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center">
              <p className="side-item bg-red-500 rounded-tr-md w-[80%]">ATS</p>
              <div className="pl-2 text-red-500">
                <button onClick={() => setModal({ status: true, err: true })}>
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-green-500  w-[80%]">SIM</p>
              <div className="pl-2 text-green-500">
                <button onClick={() => setModal({ status: true, err: false })}>
                  <FaCheckCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-blue-500  w-[80%]">HSM</p>
              <div className="pl-2 text-red-500">
                <button onClick={() => setModal({ status: true, err: true })}>
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-gray-500 rounded-br-md w-[80%]">SSM</p>
              <div className="pl-2 text-red-500">
                <button onClick={() => setModal({ status: true, err: true })}>
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden relative pt-10 ">
          {modal.status && (
            <div className="absolute h-[250px] w-[250px]  left-[120px] top-[50%]  rounded-md  ">
              {modal.err ? (
                <div className="h-full">
                  <div className="relative bg-white border border-[#E06B42]  h-full w-full rounded-lg rounded-br-none shadow-md">
                    <div className="absolute top-[100%] -right-0  bg-white rounded-b-md border-[#E06B42] border-t-0 border">
                      <button className="flex px-2 py-1.5 hover:bg-[#FDEFEB] items-center gap-2 rounded-b-md w-full text-sm text-[#E06B42]">
                        <CopyLink />
                        <p className="text-[#E06B42]">Copy the link</p>
                      </button>
                    </div>
                    <div className="flex items-center justify-end px-4 pt-2 bg-none ">
                      <button
                        onClick={() => setModal({ status: false, err: false })}
                      >
                        <CloseModal />
                      </button>
                    </div>
                    <div className="p-4 text-sm">
                      Actually there are 2, one is the one you saw, this is the
                      other! <br />
                      <br /> When there's ZERO errors found. Pls, not all these
                      tiny details and pay attention and finish 1 time!
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center flex-col gap-3 text-green-500 justify-center h-full  p-4 bg-white rounded-md relative border border-[#E06B42]">
                  <div className="absolute right-1 top-1 flex items-center justify-end px-4 pt-2 bg-none">
                    <button
                      onClick={() => setModal({ status: false, err: false })}
                    >
                      <CloseModal />
                    </button>
                  </div>
                  <AiOutlineCheckCircle size={50} />
                  <p className="text-black">No error(s) found</p>
                </div>
              )}
            </div>
          )}
          <div className=" w-[100px] z-20 ">
            <div className="flex items-center">
              <p className="side-item bg-red-500 rounded-tr-md w-[80%]">ATS</p>
              <div className="pl-2 text-red-500">
                <button
                  onClick={() => {
                    setModal({ status: true, err: true });
                    console.log("Clicked");
                  }}
                >
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-green-500  w-[80%]">SIM</p>
              <div className="pl-2 text-green-500">
                <button onClick={() => setModal({ status: true, err: false })}>
                  <FaCheckCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-blue-500  w-[80%]">HSM</p>
              <div className="pl-2 text-red-500">
                <button onClick={() => setModal({ status: true, err: true })}>
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="side-item bg-gray-500 rounded-br-md w-[80%]">SSM</p>
              <div className="pl-2 text-red-500">
                <button onClick={() => setModal({ status: true, err: true })}>
                  <AiOutlineQuestionCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-5 md:px-12 lg:px-24" id="ats">
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
              Maximize your chances of getting hired by ensuring your resume
              passes the 10 ATS best practices factors assessment.
              <br />
              <br /> To stand a better chance, your resume must score 80% or
              higher and include crucial elements such as biodata, job title,
              contact information, a LinkedIn profile, relevant subheadings, and
              an optimized file type. <br />
              <br />
              Make the process simple and efficient using our LIVE editor
              dashboard to revise your resume based on the scanner’s
              recommendations.
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
              Most resumes include only 60% of the necessary hard skills
              compared to the target job description. <br />
              <br />
              Examples of hard skills are Excel, NodeJS, SQL, JavaScript,
              accounting, engineering, medicine, teaching, etc.
              <br />
              <br />
              They are generally technical, software mastery, and professional
              skills learned to qualify for a job. <br />
              <br />
              They determine whether you should apply for the role in the first
              place.
            </p>
            <div className="my-20 overflow-x-scroll">
              <Table
                tabs={hardSkillsTabs}
                data={hardSkillsData}
                headBg="#E1ECF6"
              />
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
              Only 28% of resumes contain the necessary soft skills. <br />
              <br />
              These are essential soft skills everyone needs to succeed at work.
              <br />
              <br /> Here are the top ten in-demand soft skills:
            </p>
            <ul className="list-disc text-base pl-10 my-3">
              {softSkillsList.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
            <p className="text-lg">
              And CVJury's{" "}
              <a
                href="https://cvjury.com/292-soft-skills-essential-workplace-skills/"
                className="underline text-[#E06B42]"
              >
                soft skill
              </a>{" "}
              classifications
            </p>
            <div className="my-20 overflow-x-scroll">
              <Table
                tabs={softSkillsTabs}
                data={softSkillsData}
                headBg="#EBEBEB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMatches;
