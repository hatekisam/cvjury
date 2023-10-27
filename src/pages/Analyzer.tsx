import React, { useState } from "react";
import Table from "../components/core/Table";
import {
  CopyLink,
  DesirableIcon,
  Done,
  Edit,
  JobIcon,
  MailLinkIcon,
  PrintIcon,
  Rescan,
  ResultPresentationIcon,
  ResumeIcon,
  ShareIcon,
  SkillGapIcon,
  Upload,
  UploadRescan,
} from "../components/core/icons";
import SimilarityBar from "../components/Similarity";
import SimilarityLinearBar from "../components/SimilarityBars";
import LinearProgressBar from "../components/core/LinearProgressBar";
import ColouredTable from "../components/core/ColouredTable";

const Analyzer: React.FC = () => {
  const dummyTabs = [
    { title: "HardSkills", width: 80 },
    { title: "Frequency", width: 20 },
  ];
  const dummyTabs2 = [
    { title: "SoftSkills", width: 80 },
    { title: "Frequency", width: 20 },
  ];
  const dummyTabs3 = [
    { title: "Desirable Skills", width: 30 },
    { title: "Explanatory Notes", width: 70 },
  ];
  const dummyTabs4 = [
    { title: "Skills", width: 15 },
    {
      title: `Found in Resume
         (Frequency)`,
      width: 25,
    },
    {
      title: `Found in Job Description 
        (Frequency)`,
      width: 30,
    },
    {
      title: `Skills Gap 
         (Skills Missing from Resume)`,
      width: 30,
    },
  ];
  const dummyTabs5 = [
    { title: "Skills", width: 15, background: "rgba(224,107,66,0.20)" },
    {
      title: `Found in Resume
         (Frequency)`,
      width: 25,
    },
    {
      title: `Found in Job Description 
        (Frequency)`,
      width: 30,
    },
    {
      title: `Skills Gap 
         (Skills Missing from Resume)`,
      width: 30,
    },
  ];
  const dummyTabs6 = [
    { title: "Skills", width: 15, background: "rgba(41,171,130,0.10)" },
    {
      title: `Found in Resume
         (Frequency)`,
      width: 25,
    },
    {
      title: `Found in Job Description 
        (Frequency)`,
      width: 30,
    },
    {
      title: `Skills Gap 
         (Skills Missing from Resume)`,
      width: 30,
    },
  ];

  const dummyData = [
    { HardSkills: "Typing Fast", Frequency: 20 },
    { HardSkills: "Typing Fast", Frequency: 20 },
    { HardSkills: "Typing Fast", Frequency: 20 },
    { HardSkills: "Typing Fast", Frequency: 20 },
  ];
  const similarityLinearData = [
    {
      title: "ATS Best Practices ",
      issues: 1,
      score: 80,
    },
    {
      title: "Sales Index Match ",
      issues: 1,
      score: 70,
    },
    {
      title: "Hard Skills Match ",
      issues: 0,
      score: 100,
    },
    {
      title: "Soft Skills Match ",
      issues: 0,
      score: 19,
    },
  ];
  const [showingShare, setShowingShare] = useState(false);
  const ssmList = [
    "Excellent communication",
    "Creativity",
    "Critical thinking",
    "Culture awareness",
    "Emotional Intelligence",
    "Focus mastery",
    "Growth mindset",
    "Innovation",
    "Leadership",
    "Storytelling",
  ];
  return (
    <div
      className="w-screen bg-[#F1F1F1] px-5 md:px-12 lg:px-24 py-20 h-full overflow-y-auto"
      onClick={() => {
        if (showingShare) setShowingShare(false);
      }}
    >
      <p className="transition-all duration-150  text-[22px]  md:text-[32px] lg:text-[40px] my-2">Hard and Soft Skills (Frequencies)</p>
      <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl my-2">
        Based on the resume and job description you uploaded, here are the hard
        and soft skills we extracted from them:
      </p>
      <div className="my-10 relative">
        <div className="flex justify-between">
          <div></div>
          <p className="uppercase text-3xl">Table 1 </p>
        </div>
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className="absolute left-3 top-2 bg-white border border-[#29AB82] text-[#29AB82] flex items-center gap-3 p-2 rounded-full"
        >
          <ResumeIcon />
          <p className="text-[30px] pr-5">RESUME</p>
        </div>
        <Table tabs={dummyTabs} data={dummyData} />
        <div className="h-[40px]"></div>
        <Table tabs={dummyTabs2} data={dummyData} />
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black text-2xl text-center">
          Still, more to come. Click to see the extracted job description’s hard
          and soft skills (their frequencies):
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
          <p>See Hard & Soft Skills Job Description</p>
          <UploadRescan />
        </button>
      </div>
      <div className="my-10 relative">
        <div className="flex justify-between">
          <div></div>
          <p className="uppercase text-3xl">Table 2 </p>
        </div>
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className="absolute left-3 top-2 bg-white border border-[#6A6A6A] text-[#6A6A6A] flex items-center gap-3 p-2 rounded-full"
        >
          <JobIcon />
          <p className="text-[30px] pr-5">JOB DESCRIPTION</p>
        </div>
        <Table tabs={dummyTabs} data={dummyData} />
        <div className="h-[40px]"></div>
        <Table tabs={dummyTabs2} data={dummyData} />
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black text-2xl text-center">
          Still, more to come. Click to see the suggested desirable skills:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
          <p>See Desirable Skills</p>
          <UploadRescan />
        </button>
      </div>
      <div className="my-10">
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className=" bg-white border border-[#0078D4] text-[#0078D4] w-fit flex items-center gap-3 p-2 rounded-full"
        >
          <DesirableIcon />
          <p className="text-[30px] pr-5">SEE DESIRABLE SKILLS</p>
        </div>
        <p className="text-[24px] my-5">
          P.S.− While explicit mentions are a straightforward way to identify
          skills, there are often implied or contextual skills that
          professionals might possess based on the nature of their work, even if
          these skills aren't directly mentioned. Using the provided resume and
          job description, some potential desirable skills and attributes can be
          inferred.When presenting these skills, especially in an interview or
          in a more detailed resume, it's essential to provide specific examples
          or experiences that demonstrate these attributes:
        </p>
        <div className="my-10">
          <div className="flex justify-between">
            <div></div>
            <p className="uppercase text-3xl">Table 3 </p>
          </div>
          <Table tabs={dummyTabs3} data={dummyData} />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black text-2xl text-center">
          More to come. Click to see the job description and resume compared —
          Skills Gap Identified:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
          <p>See Skills Gap Identified</p>
          <UploadRescan />
        </button>
      </div>
      <div className="my-10">
        <div className="flex gap-3 items-center">
          <p className="uppercase text-[26px]">
            Job Description and Resume Compared:{" "}
          </p>
          <div
            style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
            className=" bg-white border border-[#E06B42] text-[#E06B42] w-fit flex items-center gap-3 p-2 rounded-full"
          >
            <SkillGapIcon />
            <p className="text-[26px] pr-5">SKILLS GAP IDENTIFIED</p>
          </div>
        </div>
        <p className="text-[20px] my-5">
          Let's compare the hard skills from the resume and the job description
          to identify the skill gaps:
        </p>
        <div className="my-10">
          <div className="flex justify-between">
            <div></div>
            <p className="uppercase text-3xl">Table 4 </p>
          </div>
          <Table tabs={dummyTabs4} data={dummyData} />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black text-2xl text-center">
          Finally, click to see your resume’s overall ‘Similarity Score’:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
          <p>See Similarity Score</p>
          <UploadRescan />
        </button>
      </div>
      <div className="mt-28">
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex items-center gap-5">
            <div className="relative flex items-center gap-2">
              <div
                className={`${
                  showingShare ? "block" : "hidden"
                } absolute right-[110%] top-[110%] bg-white rounded-xl duration-1000 transition-all text-[#6A6A6A] text-xs w-[200%]`}
              >
                <button className="flex px-5 py-2.5 hover:bg-[#FDEFEB] items-center gap-5  rounded-t-xl w-full">
                  <CopyLink />
                  <p>Copy the link</p>
                </button>
                <button className="flex px-5 py-2.5 hover:bg-[#FDEFEB] items-center gap-5 rounded-b-xl w-full">
                  <MailLinkIcon />
                  <p>Email the link</p>
                </button>
              </div>
              <button
                onClick={() => setShowingShare(true)}
                className="bg-white p-2 rounded-xl"
              >
                <ShareIcon />
              </button>
              <p className="text-[#444B54] text-[15px] font-medium">Share</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white p-2 rounded-xl">
                <PrintIcon />
              </button>
              <p className="text-[#444B54] text-[15px] font-medium">Print</p>
            </div>
          </div>
        </div>
        <p className="text-4xl text-[#6A6A6A] font-semibold my-4">
          Similarity Score
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between my-10">
          <div className="w-full md:w-[60%] flex flex-col md:flex-row  items-center gap-5">
            <SimilarityBar score={20} />
            <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
              <p>Upload and Rescan</p>
              <UploadRescan />
            </button>
          </div>
          <div className="w-full md:w-[40%] flex flex-col items-center gap-5">
            {similarityLinearData.map((info, i) => {
              return (
                <SimilarityLinearBar
                  key={i}
                  score={info.score}
                  issues={info.issues}
                  title={info.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-36 relative mx-28 border-4 border-dashed h-[300px] rounded-3xl">
        <div className="absolute bg-white rounded-3xl p-5 left-[10%] -top-[20%] w-full">
          <div className="flex gap-2 items-start">
            <ResultPresentationIcon />
            <div className="w-[70%]">
              <p className="text-3xl mb-3">Results Presentation</p>
              <p className="text-lg my-3">
                Let's Scan Your Resume Now! Instructions: It's time to revamp
                your resume with our advanced recommendations scanner. The live
                editor makes the editing process quick, effortless, and
                seamless.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-around my-5">
            <button className="flex items-center gap-2">
              <Upload />
              <p className="text-lg">Upload</p>
            </button>
            <button className="flex items-center gap-2">
              <Edit />
              <p className="text-lg">Edit</p>
            </button>
            <button className="flex items-center gap-2">
              <Rescan />
              <p className="text-lg">Rescan</p>
            </button>
            <button className="flex items-center gap-2">
              <Done />
              <p className="text-lg">Done!</p>
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="flex justify-between">
          <p className="text-4xl text-[#6A6A6A] font-semibold my-4">
            ATS Best Practices Match (ATS)
          </p>
          <div className="w-[30%]">
            <p className="text-right  text-xl">25/30</p>
            <LinearProgressBar score={70} />
          </div>
        </div>
        <p className="text-[24px] my-5">
          Maximize your chances of getting hired by ensuring your resume passes
          the 10 ATS best practices factors assessment. To stand a better
          chance, your resume must score 80% or higher and include crucial
          elements such as biodata, job title, contact information, a LinkedIn
          profile, relevant subheadings, and an optimized file type. Make the
          process simple and efficient using our LIVE editor dashboard to revise
          your resume based on the scanner’s recommendations.
        </p>
        <div className="my-10">
          <ColouredTable tabs={dummyTabs5} data={dummyData} />
        </div>
      </div>
      <div className="my-20">
        <div className="flex justify-between">
          <p className="text-4xl text-[#6A6A6A] font-semibold my-4">
            Sales Index Match (SIM)
          </p>
          <div className="w-[30%]">
            <p className="text-right  text-xl">15/30</p>
            <LinearProgressBar score={60} />
          </div>
        </div>
        <p className="text-[24px] my-5">
          We use this to assess your resume word count, measurable results
          present, active verbs present, and the presence of clichés and
          buzzwords.
        </p>
        <div className="my-10">
          <ColouredTable tabs={dummyTabs6} data={dummyData} />
        </div>
      </div>
      <div className="my-20">
        <div className="flex justify-between">
          <p className="text-4xl text-[#6A6A6A] font-semibold my-4">
            Hard Skills Match (HSM)
          </p>
          <div className="w-[30%]">
            <p className="text-right  text-xl">28/30</p>
            <LinearProgressBar score={70} />
          </div>
        </div>
        <p className="text-[24px] my-5">
          Most resumes include only 60% of the necessary hard skills compared to
          the target job description. Examples of hard skills are Excel, NodeJS,
          SQL, JavaScript, accounting, engineering, medicine, teaching, etc.
          They are generally technical, software mastery, and professional
          skills learned to qualify for a job. They determine whether you should
          apply for the role in the first place.
        </p>
        <div className="my-20">
          <Table tabs={dummyTabs5} data={dummyData} headBg="#E1ECF6" />
        </div>
      </div>
      <div className="my-20">
        <div className="flex justify-between">
          <p className="text-4xl text-[#6A6A6A] font-semibold my-4">
            Soft Skills Match (SSM)
          </p>
          <div className="w-[30%]">
            <p className="text-right  text-xl">5/30</p>
            <LinearProgressBar score={16} />
          </div>
        </div>
        <p className="text-lg mt-5">
          Only 28% of resumes contain the necessary soft skills. These are
          essential soft skills everyone needs to succeed at work. Here are the
          top ten in-demand soft skills:
        </p>
        <ul className="list-disc text-base pl-10 my-3">
          {ssmList.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <p className="text-lg">
          And CVJury's 24 <span className="underline">soft skill</span>{" "}
          classifications
        </p>
        <div className="my-20">
          <Table tabs={dummyTabs5} data={dummyData} headBg="#EBEBEB" />
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="flex gap-2 items-center text-[#E06B42] text-2xl">
          <p>Edit Resume on our Resume Editor</p>
          <UploadRescan />
        </button>
      </div>
    </div>
  );
};

export default Analyzer;
