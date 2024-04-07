function Input({
  className,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  id,
  name,
}) {
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
      name={name}
    />
  );
}

export default Input;
