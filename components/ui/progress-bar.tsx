"use client"

interface ProgressBarProps {
  percent: number // от 0 до 100
  className?: string
  bgColor?: string // цвет фона
  fillColor?: string // цвет заполнения (сплошной)
  gradientFrom?: string // начало градиента
  gradientTo?: string // конец градиента
  useGradient?: boolean // использовать ли градиент
}

export function ProgressBar({ 
  percent, 
  className = "",
  bgColor = "#F2F2F7",
  fillColor = "#6E89F1",
  gradientFrom = "#E1F3FF",
  gradientTo = "#6E89F1",
  useGradient = true
}: ProgressBarProps) {
  const clampedPercent = Math.min(100, Math.max(0, percent))
  
  const gradientStyle = useGradient 
    ? `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
    : fillColor
  
  return (
    <div className={`relative w-full h-1.5 ${className}`}>
      {/* Фон */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: bgColor }}
      />
      
      {/* Заполнение */}
      <div 
        className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
        style={{ 
          width: `${clampedPercent}%`,
          background: gradientStyle
        }}
      />
    </div>
  )
}