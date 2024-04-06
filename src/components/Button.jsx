function Button({ type, onClick, children, disabled, className, variant }) {
  return (
    <button
      type={type}
      className={`w-fit rounded-full bg-pink-600 px-6 py-2 text-white transition-all duration-700 hover:bg-pink-500 group-hover:bottom-10 group-hover:block ${className} ${variant === 'gray' ? 'bg-stone-400' : ''} ${variant === 'dark' ? 'px-32 py-3 bg-stone-800 hover:bg-stone-700' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
