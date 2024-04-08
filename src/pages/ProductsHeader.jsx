import { RiArrowDropLeftLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

function ProductsHeader() {
  const { id } = useParams();
  const urlQuery = id.replaceAll('-', ' ');
  return (
    <div className="flex h-36 items-center justify-center bg-[url('/images/heading-bg.jpg')] font-vazirBold text-3xl text-stone-400">
      <p className="flex items-end text-3xl">
        <RiArrowDropLeftLine size={24} />
        {urlQuery}
      </p>
    </div>
  );
}

export default ProductsHeader;
