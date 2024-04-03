function Button({ type, onClick, children, disabled, className }) {
  return (
    <button
      type={type}
      className={`w-fit bg-pink-600 text-white rounded-full py-2 px-6 transition-all duration-700 hover:bg-pink-500 group-hover:block group-hover:bottom-10 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
