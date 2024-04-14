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

export async function deleteProduct(id) {
  try {
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error deleting product:', error.message);
  }
}

export async function updateProduct(updatedProduct) {
  try {
    const { data, error } = await supabase
      .from('products')
      .update({
        name: updatedProduct.name,
        brand: updatedProduct.brand,
        brandDescription: updatedProduct.brandDescription,
        mass: updatedProduct.mass,
        price: updatedProduct.price,
        category: updatedProduct.category,
        code: updatedProduct.code,
        description: updatedProduct.description,
      })
      .eq('id', updatedProduct.id);

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error updating product:', error.message);
    throw error;
  }
}
