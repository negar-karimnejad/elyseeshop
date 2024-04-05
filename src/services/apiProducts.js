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

export async function getSimilarProducts(tag, id) {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Similar Products could not loaded');
  }
  const products = data.filter((product) =>
    product.tag.includes(tag[1]),
  );
  const similarProducts = products.filter((product) => product.id !== id);
  return similarProducts;
}
