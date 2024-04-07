import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import useDeleteCartItem from '../../features/cart/useDeleteCartItem';

const StyledDiv = ({ children, style }) => {
  return (
    <div
      className={`flex items-center border border-r border-white dark:border-stone-500/50 ${style}`}
    >
      {children}
    </div>
  );
};
function CartProducts({ product }) {
  const [quantity, setQuantity] = useState(product?.quantity);

  const { mutate, isPending } = useDeleteCartItem();

  const { image, name, price, category } = product.item;
  
  return (
    <div
      className={`grid grid-cols-12 items-center bg-stone-200 text-stone-700 transition-all hover:bg-stone-200 dark:text-white dark:hover:bg-stone-700 ${product.id % 2 === 0 ? 'dark:bg-stone-500/50' : 'dark:bg-stone-700'}`}
    >
      <StyledDiv style="justify-center py-3  max-md:hidden">
        <img className="w-16" src={image} alt={category} />
      </StyledDiv>
      <StyledDiv style="col-span-4 h-full p-2 text-center sm:col-span-6 md:col-span-5">
        <Link
          to={`/product/${name.replaceAll(' ', '-')}`}
          className="font-vazirMedium transition-all hover:text-pink-500 max-sm:text-sm"
        >
          {name}
        </Link>{' '}
      </StyledDiv>
      <StyledDiv style="col-span-1 h-full justify-center p-1 text-center">
        <Input
          className="w-full py-1 text-center md:w-1/2"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
      </StyledDiv>
      <StyledDiv style="col-span-2 h-full justify-center p-1 text-center max-sm:col-span-3">
        <p className="font-vazirMedium max-sm:text-sm">
          {price.toLocaleString('Fa')}
        </p>
      </StyledDiv>
      <StyledDiv style="col-span-2 h-full justify-center p-1 text-center max-sm:col-span-3">
        <p className="font-vazirMedium max-sm:text-sm">
          {(quantity * price).toLocaleString('Fa')}
        </p>
      </StyledDiv>
      <StyledDiv style="col-span-1 h-full justify-center p-1 py-7 text-center">
        <button
          onClick={() => mutate(product.id)}
          disabled={isPending}
          className="relative my-1 font-vazirBold text-4xl text-red-500 hover:text-red-600"
        >
          {isPending ? (
            <AiOutlineLoading
              size={24}
              className="absolute bottom-0 left-0 right-0 top-0 m-auto animate-spin"
            />
          ) : (
            <BiTrash size={20} />
          )}
        </button>
      </StyledDiv>
    </div>
  );
}

export default CartProducts;
