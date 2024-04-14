import { ChangeEvent } from 'react';

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  defaultValue?: string;
}
function Input({
  className,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  id,
  name,
  defaultValue,
}: InputProps) {
  return (
    <input
      className={`border text-lg outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300 ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
      id={id}
      defaultValue={defaultValue}
      name={name}
    />
  );
}

export default Input;
