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
  try {
    const { id, image } = newArticle;

    // Check if the image already exists in storage
    const hasImagePath = image?.startsWith?.(supabaseUrl);

    // If the image doesn't exist in storage, upload it
    if (!hasImagePath) {
      const imageName = image.name.replaceAll('/', '');
      const { data: storageData, error: storageError } = await supabase.storage
        .from('article-image')
        .upload(imageName, image);

      if (storageError) {
        console.error(storageError);
        throw new Error('Article image could not be uploaded');
      }

      // Construct the image path
      const imagePath = `${supabaseUrl}/storage/v1/object/public/article-image/${imageName}`;

      // Insert or update the article with the new image path
      const articleData = await insertOrUpdateArticle(newArticle, imagePath, id);

      return articleData;
    } else {
      // Insert or update the article with the existing image path
      const articleData = await insertOrUpdateArticle(newArticle, image, id);

      return articleData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function insertOrUpdateArticle(newArticle, imagePath, id) {
  try {
    let query = supabase.from('articles');

    // A) CREATE
    if (!id) {
      // Insert the new article
      const { data, error } = await query
        .insert([{ ...newArticle, image: imagePath }])
        .select(); // Select the inserted data

      if (error) {
        console.error(error);
        throw new Error('Article could not be created');
      }

      // Ensure only one record is returned
      const articleData = data ? data[0] : null;
      return articleData;
    }

    // B) EDIT
    // Update the existing article
    const { data, error } = await query
      .update({ ...newArticle, image: imagePath })
      .eq('id', id)
      .select(); // Select the updated data

    if (error) {
      console.error(error);
      throw new Error('Article could not be updated');
    }

    // Ensure only one record is returned
    const articleData = data ? data[0] : null;
    return articleData;
  } catch (error) {
    console.error(error);
    throw error;
  }
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
