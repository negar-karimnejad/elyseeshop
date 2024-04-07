import supabase from './supabase';
import { toast } from 'react-toastify';

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
