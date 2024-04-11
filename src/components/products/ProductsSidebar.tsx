import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsPagebrands, navMobileMenu } from '../../data/data';
import StyledProductsUl from './StyledProductsUl';

function ProductsSidebar() {
  const [openedHeading, setOpenedHeading] = useState(null);

  const { id } = useParams();
  const urlQuery = id.replaceAll('-', ' ');

  const menuEntry = navMobileMenu.find((item) => item.id === urlQuery);
  const list = menuEntry ? menuEntry.list : [];
  const listId = menuEntry?.id;

  const toggleExpansion = () => {
    setOpenedHeading(null);
  };

  return (
    <div className="col-span-12 flex gap-y-16 rounded-md bg-white shadow-sm dark:bg-stone-500 max-md:justify-between md:col-span-5 md:flex-col md:p-5 lg:col-span-3">
      {list.length > 0 && (
        <StyledProductsUl
          toggleExpansion={toggleExpansion}
          onClick={() =>
            setOpenedHeading((prev) => (prev === listId ? '' : listId))
          }
          openedHeading={openedHeading}
          heading={listId}
          list={list}
        />
      )}
      <StyledProductsUl
        toggleExpansion={toggleExpansion}
        onClick={() =>
          setOpenedHeading((prev) => (prev === 'برندها' ? '' : 'برندها'))
        }
        openedHeading={openedHeading}
        heading="برندها"
        list={ProductsPagebrands}
      />
    </div>
  );
}

export default ProductsSidebar;
