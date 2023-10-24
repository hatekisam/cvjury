import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone: FC<{
    onFilesSelected: (files: File[]) => void;
}> = ({ onFilesSelected }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const onDrop = (acceptedFiles: File[]) => {
        onFilesSelected(acceptedFiles);
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png', '.PNG', '.jpg', '.JPG', '.jpeg', '.JPEG'],
        },
    });

    return (
        <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active ' : ''}`}
        >
            <input {...getInputProps()} />
            {selectedImage !== null ? (
                <div className="bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-dashed border-2 flex flex-col gap-5 justify-center items-center">
                    <img src={selectedImage as string} alt="Selected" className="w-full h-full rounded-lg" />
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
                        <div className=" flex items-center rounded-md border-dashed border-2  p-2">
                            <p className="text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold">Drag & Drop</p>
                            <p className="text-[rgba(73,73,74,0.78)] text-sm font-medium"></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FileDropZone;
