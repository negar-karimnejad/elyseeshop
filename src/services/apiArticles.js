import supabase, { supabaseUrl } from './supabase';

export async function getArticles() {
  try {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*');

    if (error) {
      throw error;
    }
    return articles;
  } catch (error) {
    console.error('Error getting articals:', error.message);
    throw error;
  }
}

export async function getArticle(title) {
  try {
    const { data: article, error } = await supabase
      .from('articles')
      .select('*')
      .eq('title', title);
    if (error) {
      throw error;
    }
    return article;
  } catch (error) {
    console.error('Error getting artical:', error.message);
    throw error;
  }
}

export async function addArticle(newArticle) {
  const id = newArticle.id;
  const hasImagePath = newArticle.image?.startsWith?.(supabaseUrl);

  const imageName = newArticle.image.name.replaceAll('/', '');
  const imagePath = hasImagePath
    ? newArticle.image
    : `${supabaseUrl}/storage/v1/object/public/article-image/${imageName}`;

  // 1. Create/edit article
  let query = supabase.from('articles');

  // A) CREATE
  if (!id) query = query.insert([{ ...newArticle, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newArticle, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('article could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('article-image')
    .upload(imageName, newArticle.image);

  // 3. Delete the article IF there was an error uplaoding image
  if (storageError) {
    await supabase.from('articles').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'article image could not be uploaded and the article was not created',
    );
  }
  console.log(data);
  return data;

  // if (!newArticle.image) {
  //   throw new Error('متاسفانه مقاله جدید اضافه نشد');
  // }

  // try {
  //   const { data, error } = await supabase
  //     .from('articles')
  //     .insert(newArticle)
  //     .select();

  //   if (error) {
  //     throw error;
  //   }
  //   return data;
  // } catch (error) {
  //   console.error('Error adding artical:', error.message);
  //   throw error;
  // }
}

export async function updateArticle(updatedArticle) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .update({
        title: updatedArticle.title,
        content: updatedArticle.content,
      })
      .eq('id', updatedArticle.id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error updating artical:', error.message);
    throw error;
  }
}

export async function deleteArticle(id) {
  try {
    const { error } = await supabase.from('articles').delete().eq('id', id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting artical:', error.message);
    throw error;
  }
}
