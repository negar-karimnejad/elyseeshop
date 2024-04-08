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
  try {
    const { data: cart } = await supabase.from('cart').select('*');

    const existingItem = cart.find(
      (cartItem) =>
        Number(cartItem.productId) === Number(newItem.productId) &&
        cartItem.userId === newItem.userId,
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

export async function incrementQty(id) {
  const { data: existingProduct } = await supabase
    .from('cart')
    .select()
    .eq('id', id);

  const { data: updatedItemData, error: updateError } = await supabase
    .from('cart')
    .update({ quantity: existingProduct[0].quantity + 1 })
    .eq('id', id)
    .single();

  if (updateError) {
    throw updateError;
  }

  return updatedItemData;
}

export async function decrementQty(id) {
  const { data, error: existInCartError } = await supabase
    .from('cart')
    .select()
    .eq('id', id);

  if (existInCartError) {
    throw existInCartError;
  }

  if (data[0].quantity <= 1) {
    const { data, error } = await supabase.from('cart').delete().eq('id', id);
    toast.success('محصول از سبد خرید حذف شد');

    if (error) {
      console.error('Error while removing item from cart:', error.message);
      return;
    }
    return data;
  }

  const { error: updateError } = await supabase
    .from('cart')
    .update({ quantity: data[0].quantity - 1 })
    .eq('id', id)
    .single();

  if (updateError) {
    throw updateError;
  }
}
