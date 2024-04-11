import { FormEvent, useState } from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { toast } from 'react-toastify';
import useUser from '../../features/auth/useUser';
import useCreateCartItem from '../../features/cart/useCreateCartItem';
import Button from '../Button';
import Input from '../Input';
import { ProductProps } from '../../types/ProductProps';

function ProductCartForm({ product }: { product: ProductProps }) {
  const [quantity, setQuantity] = useState(1);

  const { mutate, isPending } = useCreateCartItem();
  const { user } = useUser();

  const submitAddToCart = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      toast.error('ابتدا باید وارد حساب خود شوید');
      return;
    }
    const newItem = {
      userId: user?.id,
      productId: product.id,
      quantity,
      item: product,
    };

    try {
      mutate(newItem);
      setQuantity(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitAddToCart} className="flex flex-col gap-5 pt-14">
      <label
        className="flex items-center font-vazirBold dark:text-stone-100"
        htmlFor=""
      >
        تعداد
        <div className="w-[175px]">
          <Input
            className="mr-4 w-full p-2"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            type="number"
          />
        </div>
      </label>
      <div className="flex items-center text-lg">
        <span className="bg-stone-200 p-3 text-stone-300">
          <IoIosPricetag size={28} />
        </span>
        <p className="w-48 bg-stone-100 p-3">
          <span className="ml-3 font-vazirBold text-pink-600">
            {product?.price.toLocaleString('Fa')}
          </span>
          تومان
        </p>
      </div>
      <div className="w-60">
        <Button
          onClick={() => {}}
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer rounded-sm font-vazirBold"
        >
          {isPending ? 'در حال افزودن...' : 'افزودن به سبد خرید'}
        </Button>
      </div>
    </form>
  );
}

export default ProductCartForm;
