"use client"

interface ProgressBarProps {
  percent: number // от 0 до 100
  className?: string
}

export function ProgressBar({ percent, className = "" }: ProgressBarProps) {
  const clampedPercent = Math.min(100, Math.max(0, percent))
  
  return (
    <div className={`relative w-59.75 h-1.5 ${className}`}>
      {/* Фон */}
      <div className="absolute inset-0 rounded-full bg-[#F2F2F7]" />
      
      {/* Заполнение */}
      <div 
        className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-[#E1F3FF]/64 to-[#6E89F1]/53"
        style={{ width: `${clampedPercent}%` }}
      />
    </div>
  )
}