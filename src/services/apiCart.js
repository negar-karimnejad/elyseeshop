import { toast } from 'react-toastify';
import supabase from './supabase';

export async function getCart() {
  const { data, error } = await supabase.from('cart').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cart could not loaded');
  }
  return data;
}

export async function deleteFromCart(id) {
  const { data, error } = await supabase.from('cart').delete().eq('id', id);
  toast.success('محصول از سبد خرید حذف شد');

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error('Product could not be deleted successfully');
  }
  return data;
}

export async function addToCart(newItem) {
  // const { user } = useAuth();
  try {
    const { data: cart } = await supabase.from('cart').select('*');

    const existingItem = cart.find(
      (cartItem) =>
        Number(cartItem.productId) === Number(newItem.productId) &&
        Number(cartItem.userId) === Number(newItem.userId),
    );

    if (existingItem) {
      const updatedQuantity = existingItem.quantity + Number(newItem.quantity);

      try {
        const { data: updatedItemData, error: updateError } = await supabase
          .from('cart')
          .update({ quantity: updatedQuantity })
          .eq('id', existingItem.id)
          .single();

        if (updateError) {
          throw updateError;
        }
        return updatedItemData;
      } catch (error) {
        console.error('Error updating item quantity:', error.message);
      }
    }

    const { data: insertedItemData, error: insertError } = await supabase
      .from('cart')
      .insert(newItem)
      .single();

    if (insertError) {
      throw insertError;
    }

    return insertedItemData;
  } catch (error) {
    console.error('Error while adding item to cart:', error.message);
    return null;
  }
}
