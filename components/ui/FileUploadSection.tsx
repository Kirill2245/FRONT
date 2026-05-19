'use client'

import React, { useCallback, useState } from 'react'
import { Upload, File, X, Image, FileText, FileIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileWithPreview extends File {
    preview?: string
    id: string
}

interface FileUploadSectionProps {
    onFileUpload?: (files: FileWithPreview[]) => void
    maxFiles?: number
    maxSize?: number // в MB
    acceptedTypes?: string[]
    className?: string
    initialFiles?: FileWithPreview[]
}

const FileUploadSection = ({
    onFileUpload,
    maxFiles = 10,
    maxSize = 15,
    acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    className,
    initialFiles = []
}: FileUploadSectionProps) => {
    const [files, setFiles] = useState<FileWithPreview[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const [error, setError] = useState<string>('')

    const getFileIcon = (fileType: string | undefined, fileName: string | undefined) => {
        // Проверяем наличие fileName
        if (!fileName) {
            return <File size={24} />
        }
        
        if (!fileType) {
            // Определяем по расширению файла
            const extension = fileName.split('.').pop()?.toLowerCase()
            if (extension === 'pdf') return <FileText size={24} />
            if (extension === 'doc' || extension === 'docx') return <FileIcon size={24} />
            if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif' || extension === 'webp') return <Image size={24} />
            return <File size={24} />
        }
        
        if (fileType.startsWith('image/')) return <Image size={24} />
        if (fileType === 'application/pdf') return <FileText size={24} />
        if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return <FileIcon size={24} />
        return <File size={24} />
    }

    const validateFile = (file: File): string | null => {
        // Проверяем наличие имени файла
        if (!file.name) {
            return `Не удалось определить имя файла`
        }
        
        // Проверяем по MIME типу и расширению
        const extension = file.name.split('.').pop()?.toLowerCase()
        const isValidByExtension = extension && ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'].includes(extension)
        
        if (!file.type && !isValidByExtension) {
            return `Неподдерживаемый тип файла. Разрешены: JPG, PNG, PDF, DOC, DOCX`
        }
        
        // Проверяем MIME тип или расширение
        const isAccepted = acceptedTypes.includes(file.type) || 
                          (extension === 'docx' && file.type === 'application/zip') || // Некоторые docx определяются как zip
                          (extension === 'jpg' && !file.type) ||
                          (extension === 'png' && !file.type) ||
                          (extension === 'pdf' && !file.type) ||
                          (extension === 'doc' && !file.type)
        
        if (!isAccepted) {
            return `Неподдерживаемый тип файла. Разрешены: JPG, PNG, PDF, DOC, DOCX`
        }
        
        if (file.size > maxSize * 1024 * 1024) {
            return `Файл слишком большой. Максимальный размер: ${maxSize}MB`
        }
        return null
    }

    const processFiles = (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles)
        const validFiles: FileWithPreview[] = []
        const errors: string[] = []

        if (files.length + fileArray.length > maxFiles) {
            setError(`Можно загрузить не более ${maxFiles} файлов`)
            return
        }

        fileArray.forEach(file => {
            const error = validateFile(file)
            if (error) {
                errors.push(error)
            } else {
                // Создаем preview только для изображений
                const extension = file.name?.split('.').pop()?.toLowerCase()
                const isImage = file.type?.startsWith('image/') || 
                               ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')
                
                const fileWithPreview: FileWithPreview = {
                    ...file,
                    id: `${Date.now()}-${Math.random()}`,
                    preview: isImage ? URL.createObjectURL(file) : undefined
                }
                validFiles.push(fileWithPreview)
            }
        })

        if (errors.length > 0) {
            setError(errors[0])
            setTimeout(() => setError(''), 3000)
        }

        if (validFiles.length > 0) {
            const updatedFiles = [...files, ...validFiles]
            setFiles(updatedFiles)
            onFileUpload?.(updatedFiles)
            setError('')
        }
    }

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const droppedFiles = e.dataTransfer.files
        if (droppedFiles.length > 0) {
            processFiles(droppedFiles)
        }
    }, [files])

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles && selectedFiles.length > 0) {
            processFiles(selectedFiles)
        }
    }, [files])

    const removeFile = (fileId: string) => {
        const fileToRemove = files.find(f => f.id === fileId)
        if (fileToRemove?.preview) {
            URL.revokeObjectURL(fileToRemove.preview)
        }
        const updatedFiles = files.filter(f => f.id !== fileId)
        setFiles(updatedFiles)
        onFileUpload?.(updatedFiles)
    }

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const getFileExtension = (fileName: string | undefined) => {
        if (!fileName) return ''
        return fileName.split('.').pop()?.toUpperCase() || ''
    }

    return (
        <div className={cn('flex flex-col gap-4', className)}>
            {/* Drag & Drop зона */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                    'relative flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 transition-all cursor-pointer',
                    'hover:border-[#101073] hover:bg-[#101073]/5',
                    isDragging && 'border-[#101073] bg-[#101073]/10 scale-[1.01]',
                    error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                )}
                onClick={() => document.getElementById('file-upload')?.click()}
            >
                <div className={cn(
                    'rounded-full p-3 transition-all',
                    isDragging ? 'bg-[#101073]/20' : 'bg-[#101073]/10'
                )}>
                    <Upload className={cn(
                        'h-8 w-8 transition-all',
                        isDragging ? 'text-[#101073] scale-110' : 'text-[#101073]'
                    )} />
                </div>
                
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                        Перетащите файлы или <span className="text-[#101073]">нажмите для выбора</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                        Поддерживаемые форматы: JPG, PNG, PDF, DOC, DOCX
                    </p>
                    <p className="text-xs text-gray-500">
                        Максимальный размер: {maxSize}MB (макс. {maxFiles} файлов)
                    </p>
                </div>

                <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,image/jpeg,image/png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileSelect}
                    className="hidden"
                />
            </div>

            {/* Ошибка */}
            {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                    {error}
                </div>
            )}

            {/* Список загруженных файлов */}
            {files.length > 0 && (
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-700">Загруженные файлы ({files.length}/{maxFiles})</h4>
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                        {files.map((file) => (
                            <div
                                key={file.id}
                                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 transition-all hover:shadow-sm"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="text-[#101073]">
                                        {getFileIcon(file.type, file.name)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {file.name || 'Без имени'}
                                        </p>
                                        <div className="flex gap-2 text-xs text-gray-500">
                                            <span>{getFileExtension(file.name)}</span>
                                            <span>•</span>
                                            <span>{formatFileSize(file.size)}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {file.preview && (
                                    <div className="ml-3 h-10 w-10 flex-shrink-0 overflow-hidden rounded border border-gray-200">
                                        <img
                                            src={file.preview}
                                            alt={file.name || 'Preview'}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                )}
                                
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        removeFile(file.id)
                                    }}
                                    className="ml-3 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-500 flex-shrink-0"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FileUploadSection