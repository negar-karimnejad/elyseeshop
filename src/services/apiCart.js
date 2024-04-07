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
  //   toast success
  if (error) {
    console.error(error);
    // toast error
    throw new Error('Product could not be deleted successfully');
  }
  return data;
}
