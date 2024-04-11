import { ReactNode } from 'react';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: string;
}
function Button({
  type,
  onClick,
  children,
  disabled,
  className,
  variant,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-fit rounded-full bg-pink-600 px-6 py-2 text-white transition-all duration-700 hover:bg-pink-500 disabled:animate-pulse disabled:opacity-50 group-hover:bottom-10 group-hover:block ${className} ${variant === 'gray' ? 'bg-stone-400' : ''} ${variant === 'dark' ? 'bg-stone-800 px-32 py-3 hover:bg-stone-700' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
