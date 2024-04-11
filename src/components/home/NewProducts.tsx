function NewProducts({ children }) {
  return (
    <div className="container">
      <div className="my-5 grid grid-cols-2 gap-4 rounded-md bg-pink-200 p-5 dark:bg-stone-700 lg:grid-cols-3 xl:grid-cols-6">
        {children}
      </div>
    </div>
  );
}

export default NewProducts;
