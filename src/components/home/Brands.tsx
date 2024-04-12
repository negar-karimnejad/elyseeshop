import { Link } from 'react-router-dom';

function Brands() {
  return (
    <div className="container">
      <div className="mt-5 grid grid-cols-4 items-center gap-5 rounded-md border border-stone-500 p-5 lg:grid-cols-6 xl:grid-cols-12 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <Link key={index} to="/brands">
            <img
              loading="lazy"
              src={`./images/brands/${index + 1}.jpg`}
              alt="brand image"
              key={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brands;
