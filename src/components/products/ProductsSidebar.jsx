import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsPagebrands, navMobileMenu } from '../../data/data';
import StyledProductsUl from './StyledProductsUl';

function ProductsSidebar() {
  const [openedHeading, setOpenedHeading] = useState(null);
  const { id } = useParams();
  const urlQuery = id.replaceAll('-', ' ');

  const { list, id: listId } = navMobileMenu.find(
    (item) => item.id === urlQuery,
  );
  const ProductsFilterItems = [listId, 'برند'];
  const toggleExpansion = () => {
    setOpenedHeading(null);
  };
  return (
    <div className="col-span-12 flex gap-y-16 rounded-md bg-white shadow-sm dark:bg-stone-500 max-md:justify-between md:col-span-5 md:flex-col md:p-5 lg:col-span-3">
      {ProductsFilterItems.map((filter, index) => (
        <StyledProductsUl
          key={index}
          toggleExpansion={toggleExpansion}
          onClick={() =>
            setOpenedHeading((prev) => (prev === filter ? '' : filter))
          }
          openedHeading={openedHeading}
          heading={filter}
          list={filter === 'برند' ? ProductsPagebrands : list}
        />
      ))}
    </div>
  );
}

export default ProductsSidebar;
