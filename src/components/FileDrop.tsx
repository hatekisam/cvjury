import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileIcon } from './core/icons';

const FileDropZone: FC<{
    onFilesSelected: (files: File[]) => void;
}> = ({ onFilesSelected }) => {
    const [selectedFile, setSelectedFile] = useState(false);
    const onDrop = (acceptedFiles: File[]) => {
        onFilesSelected(acceptedFiles);
        setSelectedFile(true);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'pdf/docs': ['.pdf', '.PDF', '.doc', '.DOC', '.docx', '.DOCX'],
        },
    });

    return (
        <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active ' : ''}`}
        >
            <input {...getInputProps()} />
            {selectedFile  ? (
                <div className="bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-dashed border-2 flex flex-col gap-5 justify-center items-center">
                    {/* <img src={selectedFile as string} alt="Selected" className="w-full h-full rounded-lg" /> */}
                </div>
            ) : (
                <div>
                    {isDragActive ? (
                        <div className="bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-dashed border-2 flex flex-col gap-5 justify-center items-center p-2 ">
                            <p className="text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold">
                                Drop the file here
                            </p>
                        </div>
                    ) : (
                        <div className=" flex items-center justify-between rounded-md border-dashed border-2  p-2 text-[#3D4D64] text-xs">
                            <FileIcon />
                            <p className="   ">Click or drag file to this area to upload.</p>
                            <button className='px-4 py-1.5 bg-[#F9F9F9] border-2 border-[#C7CCD2] rounded-full '>Browse</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FileDropZone;
