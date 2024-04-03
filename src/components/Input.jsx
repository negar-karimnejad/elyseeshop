function Input({
  className,
  type,
  placeholder,
  value,
  onChange,
  required,
  id,
  name,
}) {
  return (
    <input
      className={`${className} border outline-none dark:text-stone-800`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      id={id}
      name={name}
    />
  );
}

export default Input;
