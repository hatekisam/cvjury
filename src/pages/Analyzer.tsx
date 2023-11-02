import React, { useState } from "react";
// import Table from "../components/core/Table";
import {
  CopyLink,
  Done,
  Edit,
  MailLinkIcon,
  PrintIcon,
  Rescan,
  ResultPresentationIcon,
  ShareIcon,
  Upload,
  UploadRescan,
} from "../components/core/icons";
import SimilarityBar from "../components/Similarity";
import SimilarityLinearBar from "../components/SimilarityBars";
// import LinearProgressBar from "../components/core/LinearProgressBar";
// import ColouredTable from "../components/core/ColouredTable";
import ResumeSkills from "../components/ResumeSkills";
import JobSkills from "../components/JobSkills";
import DesirableSkills from "../components/DesirableSkills";
import JobResumeComparison from "../components/JobResumeComparison";
import AllMatches from "../components/AllMatches";
import { Link } from "react-router-dom";

const Analyzer: React.FC = () => {
  const hardTitles = [
    { title: "HardSkills", name: "Hard Skills", width: 80 },
    { title: "Frequency", name: "Frequency", width: 20 },
  ];
  const softTitles = [
    { title: "SoftSkills", name: "Soft Skills", width: 80 },
    { title: "Frequency", name: "Frequency", width: 20 },
  ];
  const hardSkills = [
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
    { HardSkills: "Hardworking", Frequency: 20 },
  ];
  const desireTitles = [
    { title: "DesirableSkills", name: "Desirable Skills", width: 25 },
    { title: "ExplanatoryNotes", name: "Explanatory Notes", width: 75 },
  ];
  const desireSkills = [
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
    {
      DesirableSkills: "Hard Working",
      ExplanatoryNotes: "This is a dummy text",
    },
  ];

  const softSkills = [
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
    { SoftSkills: "Hardworking", Frequency: 20 },
  ];
  const jobResumeComparison = [
    { title: "Skills", name: "Skills", width: 15 },
    {
      title: `<p>Found in Resume <br /><br />
         (Frequency)</p>`,
      name: `<p>Found in Resume<br />
      (Frequency)</p>`,
      width: 25,
    },
    {
      title: `Found in Job Description 
        (Frequency)`,
      name: `<p>Found in Job Description <br />
      (Frequency)</p>`,
      width: 30,
    },
    {
      title: `Skills Gap 
         (Skills Missing from Resume)`,
      name: `<p>Skills Gap<br /> 
      (Skills Missing from Resume)</p>`,
      width: 30,
    },
  ];
  const jobResumeComparisonData = [
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
    {
      Skills: "Java",
      "Found in Resume (Frequency)": "20",
      "Found in Job Description (Frequency)": "20",
      "Skills Gap (Skills Missing from Resume)": "10",
    },
  ];
  const atsTabs = [
    {
      title: "Titles",
      name: "Titles",
      width: 30,
      background: "rgba(224,107,66,0.20)",
    },
    {
      title: `Notification`,
      name: "Notification",
      width: 5,
    },
    {
      title: `Confirmed`,
      name: "Confirmed",
      width: 5,
    },
    {
      title: `Description`,
      name: "Description",
      width: 60,
    },
  ];
  const atsData = [
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "The .docx, PDF, and TXT file formats are the best for your resume, especially if you're uploading it to companies' portals. Some file types can cause errors in Applicant Tracking System; for example, avoid JPEG, PNG, GIF, and SVG file formats.",
    },
    {
      Titles: "Email Address",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "Your resume should contain complete and accurate contact information so recruiters can reach you. Recruiters tend to use email as their primary method of communication. Add an active email address.",
    },
    {
      Titles: "Phone Number",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "Add your telephone number, preferably a mobile number, so recruiters can reach you anytime.",
    },
    {
      Titles: "LinkedIn Profile",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "If recruiters cannot find you on LinkedIn, you do not exist. Add a link to your optimised LinkedIn profile with a professional headshot, circa 220-character headline, and a summary in the About section. Complete all the other LinkedIn profile sections as well.      ",
    },
    {
      Titles: "Matching Job Title",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "The job title plays a significant role in your match rate. Most ATS will match applicants with suitable job titles for the open position. If you held a similar job before, add that job title so it matches the one you are applying for. This tactic doesn't deceive as long the roles are similar. Include similar job titles in your summary statement.",
    },
    {
      Titles: "Education Requirements",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
      message:
        "If the advertiser requires a degree for the job, ensure your resume includes your relevant qualifications. If you don't have the exact degree, explain your qualifications using the language from the job description. Always include the full title of your degree. Example: Bachelor of Arts, Political Science      ",
    },
    {
      Titles: "Sections Headings",
      Notification: true,
      Confirmed: false,
      Description: "Hello World Testing Dummy Text",
      message:
        "Format your resume sections correctly. The ATS breaks down your resume into sections. For example, Work Experience, Education, Skills, Interests, and Awards/Achievements. Ensure the ATS reads your information correctly using section headings consistent with industry standards. Avoid saying ‘Places I've Been’ instead of ‘Work Experience.’",
    },
    {
      Titles: "Date Formatting",
      Notification: true,
      Confirmed: false,
      Description: "Hello World Testing Dummy Text",
      message:
        "Follow standard formats for dates when listing work experience and education: M/YY or MM/YY or M/YYYY or MM/YYYY or Month YYYY [e.g., 3/21 or 03/21 or 03/2021 or Mar 2021 or March 2021].      ",
    },
    {
      Titles: "Special Characters",
      Notification: true,
      Confirmed: false,
      Description: "Hello World Testing Dummy Text",
      message:
        "Avoid using special characters in your resume, as the ATS may not recognise them. For example, Latin words, ampersands, asterisks, less common bullet points, arrows, etc. Most ATS systems only recognise the basic symbols on your standard computer keyboard [e.g., ~, @, #, %, &, (,), _, +,        ",
    },
    {
      Titles: "Organisation's Name & Website",
      Notification: true,
      Confirmed: false,
      Description: "Hello World Testing Dummy Text",
      message:
        "The organisation you're applying to for the job or the job advertiser. Add their website address. You can add these as the last sentence in your professional summary. For example, `Seeking a career adviser role at the City University of London (www.city.ac.uk) to offer greater opportunities to reach and impact wider audiences.`",
    },
  ];

  const salesTabs = [
    {
      title: "Title",
      width: 30,
      name: "Title",
      background: "rgba(41,171,130,0.10)",
    },
    {
      title: `Notification`,
      name: "Notification",
      width: 5,
    },
    {
      title: `Confirmed`,
      name: "Confirmed",
      width: 5,
    },
    {
      title: `Description`,
      name: "Description",
      width: 60,
    },
  ];
  const salesData = [
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
    },
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
    },
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
    },
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
    },
    {
      Titles: "Resume File Type",
      Notification: true,
      Confirmed: true,
      Description: "Hello World Testing Dummy Text",
    },
  ];

  const hardSkillsMatchesTabs = [
    { title: "Skills", name: "Skills", width: 25 },
    { title: "Resume", name: "Resume", width: 25 },
    { title: "JobDescription", name: "Job Descpription", width: 25 },
    { title: "SkillsGap", name: "Skills Gap", width: 25 },
  ];
  const hardSkillsMatchesData = [
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
  ];
  const softSkillsMatchesTabs = [
    { title: "Skills", name: "Skills", width: 25 },
    { title: "Resume", name: "Resume", width: 25 },
    { title: "JobDescription", name: "Job Descpription", width: 25 },
    { title: "SkillsGap", name: "Skills Gap", width: 25 },
  ];
  const softSkillsMatchesData = [
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
    { Skills: "Carpenting", Resume: 1, JobDescription: 1, SkillsGap: 2 },
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
      className="w-screen bg-[#F1F1F1]  py-20 h-full overflow-y-auto overflow-x-hidden"
      onClick={() => {
        if (showingShare) setShowingShare(false);
      }}
    >
      <ResumeSkills
        hardTitles={hardTitles}
        softTitles={softTitles}
        hardSkills={hardSkills}
        softSkills={softSkills}
      />
      <JobSkills
        hardTitles={hardTitles}
        softTitles={softTitles}
        hardSkills={hardSkills}
        softSkills={softSkills}
      />
      <DesirableSkills tableTitles={desireTitles} tableData={desireSkills} />
      <JobResumeComparison
        tableTitles={jobResumeComparison}
        tableData={jobResumeComparisonData}
      />
      <div className="mt-28 px-5 md:px-12 lg:px-24">
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
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between my-10">
          <div className="w-full md:w-[60%] flex flex-col lg:flex-row  items-center  gap-5">
            <SimilarityBar score={20} />
            <Link
              to={"/"}
              className="flex gap-2 items-center text-[#E06B42] text-2xl"
            >
              <p>Upload and Rescan</p>
              <UploadRescan />
            </Link>
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
      <div className="hidden  md:block px-5 md:px-12 lg:px-24 my-10 md:my-16 lg:mt-36 relative mx-2 md:mx-12 lg:mx-20 sm:border-4 border-dashed h-[300px] rounded-3xl w-[80%]">
        <div className="sm:absolute bg-white rounded-3xl p-3 md:p-5 left-[8%] -top-[20%] w-full shadow-2xl">
          <div className="flex gap-2 items-start">
            <ResultPresentationIcon />
            <div className="w-full md:w-[70%]">
              <p className="text-xl md:text-2xl lg:text-3xl mb-3">
                Results Presentation
              </p>
              <p className="text-[13px] md:text-base lg:text-lg my-3">
                Let's Scan Your Resume Now!{" "}
                <span className="font-bold">Instructions</span>: It's time to
                revamp your resume with our advanced recommendations scanner.
                The live editor makes the editing process quick, effortless, and
                seamless.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px] md:text-base lg:text-lg my-3">
            <button className="w-[50%]  sm:w-full flex items-center gap-2">
              <Upload />
              <p>Upload</p>
            </button>
            <button className="w-[50%]  sm:w-full flex items-center gap-2">
              <Edit />
              <p>Edit</p>
            </button>
            <button className="w-[50%]  sm:w-full flex items-center gap-2">
              <Rescan />
              <p>Rescan</p>
            </button>
            <button className="w-[50%]  sm:w-full flex items-center gap-2">
              <Done />
              <p>Done!</p>
            </button>
          </div>
        </div>
      </div>
      <div className="block md:hidden mx-auto bg-white  rounded-3xl p-3 md:p-5 left-[8%] -top-[20%] w-[90%] ">
        <div className="flex gap-2 items-star">
          <ResultPresentationIcon />
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl lg:text-3xl mb-3">
              Results Presentation
            </p>
            <p className="text-base lg:text-lg my-3">
              Let's Scan Your Resume Now!{" "}
              <span className="font-bold">Instructions</span>: It's time to
              revamp your resume with our advanced recommendations scanner. The
              live editor makes the editing process quick, effortless, and
              seamless.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-base lg:text-lg my-3">
          <button className="w-[50%]  sm:w-full flex items-center gap-2">
            <Upload />
            <p>Upload</p>
          </button>
          <button className="w-[50%]  sm:w-full flex items-center gap-2">
            <Edit />
            <p>Edit</p>
          </button>
          <button className="w-[50%]  sm:w-full flex items-center gap-2">
            <Rescan />
            <p>Rescan</p>
          </button>
          <button className="w-[50%]  sm:w-full flex items-center gap-2">
            <Done />
            <p>Done!</p>
          </button>
        </div>
      </div>
      <AllMatches
        softSkillsList={ssmList}
        atsTabs={atsTabs}
        atsData={atsData}
        salesData={salesData}
        salesTabs={salesTabs}
        hardSkillsTabs={hardSkillsMatchesTabs}
        hardSkillsData={hardSkillsMatchesData}
        softSkillsData={softSkillsMatchesData}
        softSkillsTabs={softSkillsMatchesTabs}
      />
      <div className="flex items-center justify-center my-10">
        <button className="flex gap-2 items-center text-[#E06B42] text-base md:text-[20px]  lg:text-2xl">
          <p>Edit Resume on our Resume Editor</p>
          <UploadRescan />
        </button>
      </div>
    </div>
  );
};

export default Analyzer;
