import { FC, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileIcon } from "./core/icons";

const FileDropZone: FC<{
  onFilesSelected: (files: File[]) => void;
}> = ({ onFilesSelected }) => {
  const [selectedFile, setSelectedFile] = useState(false);
  const [load, setLoad] = useState(0);
  useEffect(() => {
    if (selectedFile) {
      const intervalId = setInterval(() => {
        if (load < 100) setLoad(load + 10);
        else {
          clearInterval(intervalId);
          setSelectedFile(false);
        }
      }, 500);
    }
  }, [selectedFile, load]);
  const onDrop = (acceptedFiles: File[]) => {
    onFilesSelected(acceptedFiles);
    setSelectedFile(true);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "pdf/docs": [".pdf", ".PDF", ".doc", ".DOC", ".docx", ".DOCX"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone  ${isDragActive ? "active " : ""}`}
    >
      <input {...getInputProps()} />
      <div>
        {isDragActive ? (
          <div className="bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-dashed border-2 flex flex-col gap-5 justify-center items-center p-2 ">
            <p className="text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold">
              Drop the file here
            </p>
          </div>
        ) : (
          <div className=" flex items-center justify-between rounded-md border-dashed border-2  p-2 text-[#3D4D64] text-xs relative h-[100px] px-5">
            {/* <div
              className={`absolute h-full w-full top-0 left-0 rounded-md py-5 ${
                load > 95 ? "bg-white" : "bg-red-500"
              } opacity-25 transition-all duration-300`}
              style={{ width: `${load}%` }}
            ></div> */}
            <FileIcon />
            <p className="   ">Click or drag file to this area to upload.</p>
            <button className="px-4 py-1.5 bg-[#F9F9F9] border-2 border-[#C7CCD2] rounded-full ">
              Browse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileDropZone;
