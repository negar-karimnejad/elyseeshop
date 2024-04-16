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
  const imageName = newArticle.image.name;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/article-image/${imageName}`;

  try {
    const { error: storageError } = await supabase.storage
      .from('article-image')
      .upload(imageName, newArticle.image);

    if (storageError) {
      throw storageError;
    }

    const { data, error } = await supabase
      .from('articles')
      .insert([{ ...newArticle, image: imagePath }])
      .select();

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error adding artical:', error.message);
    throw error;
  }
}
export async function updateArticle(updatedArticle) {
  const imageName = updatedArticle.image.name;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/article-image/${imageName}`;

  try {
    const { error: storageError } = await supabase.storage
      .from('article-image')
      .upload(imageName, updatedArticle.image);

    if (storageError) {
      throw storageError;
    }

    const { data, error } = await supabase
      .from('articles')
      .update({
        title: updatedArticle.title,
        content: updatedArticle.content,
        image: imagePath,
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
