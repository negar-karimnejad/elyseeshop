function Banner({ children }) {
  return (
    <div
      className={`${
        children.length > 2 ? "lg:grid-cols-4" : ""
      } container grid grid-cols-1 md:grid-cols-2 gap-5 pt-5`}
    >
      {children}
    </div>
  );
}

export default Banner;
