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

export async function getSimilarProducts(tag) {
  console.log(tag);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('tag', tag);

  if (error) {
    console.error(error);
    throw new Error('Similar Products could not loaded');
  }
  console.log('🎏', data);
  return data;
}
