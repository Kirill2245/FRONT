import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

interface ToggleSwitchProps {
  options: [string, string]; 
  defaultValue?: 'left' | 'right';
  onChange?: (value: 'left' | 'right') => void;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

const ToggleSwitch = ({
  options,
  defaultValue = 'left',
  onChange,
  className,
  leftClassName,
  rightClassName,
  activeClassName = 'text-[#0A0A0A]',
  inactiveClassName = 'text-[#4A5565]',
}: ToggleSwitchProps) => {
  const [active, setActive] = useState<'left' | 'right'>(defaultValue);

  const handleToggle = (value: 'left' | 'right') => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div
      className={cn(
        'relative flex bg-[#e3e3f1] w-full p-1 rounded-[10px] h-11',
        className
      )}
    >
      <motion.div
        layout
        className="absolute top-1 bottom-1 bg-white rounded-md shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),_0px_1px_3px_0px_rgba(0,0,0,0.1)]"
        initial={false}
        animate={{
          x: active === 'left' ? 0 : '100%',
          width: 'calc(50% - 0.25rem)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      <button
        type="button"
        className={cn(
          'flex-1 relative z-10 rounded-md transition-all duration-200',
          active === 'left' ? activeClassName : inactiveClassName,
          leftClassName
        )}
        onClick={() => handleToggle('left')}
      >
        {options[0]}
      </button>

      <button
        type="button"
        className={cn(
          'flex-1 relative z-10 rounded-md transition-all duration-200',
          active === 'right' ? activeClassName : inactiveClassName,
          rightClassName
        )}
        onClick={() => handleToggle('right')}
      >
        {options[1]}
      </button>
    </div>
  );
};

export default ToggleSwitch;