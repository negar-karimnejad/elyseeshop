function Brands() {
  return (
    <div className="container">
      <div className="mt-5 items-center gap-5 grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 border border-stone-500 p-5 rounded-md ">
        {Array.from({ length: 12 }).map((_, index) => (
          <img src={`./images/brands/${index + 1}.jpg`} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Brands;
