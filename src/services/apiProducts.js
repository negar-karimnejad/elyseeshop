import supabase, { supabaseUrl } from './supabase';

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
  const imageName = newProduct.image.name;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;

  const brandImageName = newProduct.brandImage.name;
  const brandImagePath = `${supabaseUrl}/storage/v1/object/public/brands/${brandImageName}`;

  try {
    const { error: storageError } = await supabase.storage
      .from('products')
      .upload(imageName, newProduct.image);

    if (storageError) {
      throw storageError;
    }

    const { error: brandStorageError } = await supabase.storage
      .from('brands')
      .upload(brandImageName, newProduct.brandImage);

    if (brandStorageError) {
      throw brandStorageError;
    }

    const { data, error } = await supabase
      .from('products')
      .insert([{ ...newProduct, image: imagePath, brandImage: brandImagePath }])
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
  const imageName = updatedProduct.image.name;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;
  
  const brandImageName = updatedProduct.brandImage.name;
  const brandImagePath = `${supabaseUrl}/storage/v1/object/public/brands/${brandImageName}`;
  
  try {
    const { error: storageError } = await supabase.storage
      .from('products')
      .upload(imageName, updatedProduct.image);

    if (storageError) {
      throw storageError;
    }

    const { error: brandStorageError } = await supabase.storage
      .from('brands')
      .upload(brandImageName, updatedProduct.brandImage);

    if (brandStorageError) {
      throw brandStorageError;
    }
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
        image: imagePath,
        brandImage: brandImagePath,
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
