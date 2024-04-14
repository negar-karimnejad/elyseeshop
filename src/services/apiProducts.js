import supabase from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Products could not loaded');
  }
  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('name', id);

  if (error) {
    console.error(error);
    throw new Error('Product could not loaded');
  }
  return data;
}

export async function createNewProduct(newProduct) {
  console.log(newProduct);
  try {
    const { data, error } = await supabase
      .from('products')
      .insert(newProduct)
      .select();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error adding product:', error.message);
  }
}
