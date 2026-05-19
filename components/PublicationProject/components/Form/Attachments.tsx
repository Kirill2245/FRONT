// Attachments.tsx
'use client'

import { useState } from 'react'
import FileUploadSection from "@/components/ui/FileUploadSection";
import Box from "./box";

export interface FileWithPreview extends File {
    preview?: string
    id: string
}

interface AttachmentsProps {
    onFilesChange?: (files: FileWithPreview[]) => void
    initialFiles?: FileWithPreview[]
}

const Attachments = ({ onFilesChange, initialFiles = [] }: AttachmentsProps) => {
    const [files, setFiles] = useState<FileWithPreview[]>(initialFiles)

    const handleFileUpload = (uploadedFiles: FileWithPreview[]) => {
        setFiles(uploadedFiles)
        onFilesChange?.(uploadedFiles)
        console.log('Файлы для сохранения:', uploadedFiles)
    }

    return (
        <Box header="Вложения">
            <div className="flex flex-col gap-4">
                <FileUploadSection
                    maxFiles={5}
                    maxSize={15}
                    onFileUpload={handleFileUpload}
                    initialFiles={initialFiles}
                />
                <span className="text-[#364153] text-[14px] font-medium">
                    <span className="text-red-700">*</span>
                    Дополнительные материалы будут предоставлены после отбора исполнителя
                </span>
            </div>
        </Box>
    );
}

export default Attachments;