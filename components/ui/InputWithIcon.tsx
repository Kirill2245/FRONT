import { cn } from "@/lib/utils"

interface InputWithIconProps extends React.ComponentProps<'input'> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onRightIconClick?: () => void
}

function InputWithIcon({ 
  className, 
  leftIcon, 
  rightIcon, 
  onRightIconClick, 
  ...props 
}: InputWithIconProps) {
  return (
    <div className="relative w-full">
      {leftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {leftIcon}
        </div>
      )}
      <input
        className={cn(
          'h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          leftIcon && 'pl-8',
          rightIcon && 'pr-8',
          className
        )}
        {...props}
      />
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {rightIcon}
        </button>
      )}
    </div>
  )
}

export default InputWithIcon