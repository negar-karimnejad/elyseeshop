function NewProducts({ children }) {
  return (
    <div className="container">
      <div className="p-5 gap-5 mt-5 rounded-md bg-pink-200 grid grid-cols-2 lg:grid-cols-6">
        {children}
      </div>
    </div>
  );
}

export default NewProducts;
