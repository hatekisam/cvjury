import React, { useState } from "react";
import FileDropZone from "./FileDrop";
import DocViewer from "react-doc-viewer";
import { DeleteIcon } from "./core/icons";

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<any | undefined>();
  const handleFiles = (files: File[]) => {
    console.log(files);
    setFile(files[0].webkitRelativePath);
  };

  return (
    <div className="w-full sm:w-[50%] flex justify-between">
      <div className="md:w-[20%] lg:w-[35%]"></div>
      <div className="w-full md:w-[80%] lg:w-[65%] text-center">
        <p className="text-[#6A6A6A] text-3xl">Resume</p>
        <div className="p-5 border-dashed border-2 border-black rounded-3xl ">
          <FileDropZone onFilesSelected={handleFiles} />
          <div className="mt-5">
            {file ? (
              <div>
                <DocViewer
                  documents={[
                    {
                      uri: "https://docs.google.com/document/d/10na3SqNSJsZ0VPZkz4YYw1w2kJGSKp3WYuvVhIOaekY/edit",
                    },
                  ]}
                />
              </div>
            ) : (
              <textarea
                className="border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full resize-none outline-none h-[200px]"
                placeholder="Or paste your resume here"
              ></textarea>
            )}
          </div>
          <div className="flex mt-1 justify-between">
            <div></div>
            <button
              onClick={() => {
                setFile(undefined);
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
