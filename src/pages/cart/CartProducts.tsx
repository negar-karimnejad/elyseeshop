import { ChangeEvent, ReactNode, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import useDecrementItem from '../../features/cart/useDecrementItem';
import useDeleteCartItem from '../../features/cart/useDeleteCartItem';
import useIncrementItem from '../../features/cart/useIncrementItem';

interface StyledDivProps {
  children: ReactNode;
  style: string;
}

interface CartProductsProps {
  product: {
    id: number;
    userId: string;
    productId: number;
    quantity: number;
    item: {
      id: number;
      image: string;
      name: string;
      price: number;
      category: string;
    };
  };
}

const StyledDiv = ({ children, style }: StyledDivProps) => {
  return (
    <div
      className={`flex items-center border border-r border-white dark:border-stone-500/50 ${style}`}
    >
      {children}
    </div>
  );
};

function CartProducts({ product }: CartProductsProps) {
  const [quantity, setQuantity] = useState(product?.quantity);

  const { mutate, isPending } = useDeleteCartItem();
  const { mutate: incrementItem, isPending: incrementPending } =
    useIncrementItem();
  const { mutate: decrementtItem, isPending: decrementtPending } =
    useDecrementItem();

  const { image, name, price, category } = product.item;

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
    try {
      if (quantity > Number(e.target.value)) {
        decrementtItem(product.id);
      } else {
        incrementItem(product.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = () => {
    toast(
      () => (
        <div
          className="flex items-center justify-between"
          style={{ direction: 'rtl' }}
        >
          <span>حذف محصول از سبد خرید:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                mutate(product?.id);
                toast.dismiss();
              }}
              className="rounded-md bg-red-500 px-5 py-1 text-white transition-all hover:bg-red-400"
            >
              حذف
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        position: 'top-right',
        theme: 'light',
      },
    );
  };

  return (
    <div
      className={`grid grid-cols-12 items-center bg-stone-200 text-stone-700 transition-all hover:bg-stone-200 dark:text-white dark:hover:bg-stone-700 ${product.id % 2 === 0 ? 'dark:bg-stone-500/50' : 'dark:bg-stone-700'}`}
    >
      <StyledDiv style="justify-center py-3  max-md:hidden">
        <img loading="lazy" className="w-16" src={image} alt={category} />
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
          onChange={changeHandler}
          disabled={incrementPending || decrementtPending}
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
          onClick={deleteHandler}
          disabled={isPending}
          className="relative my-1 font-vazirBold text-4xl text-red-500 hover:text-red-600"
        >
          {isPending ? (
            <AiOutlineLoading
              size={20}
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
