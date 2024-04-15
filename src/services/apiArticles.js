import supabase from './supabase';

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
  if (!newArticle.image) {
    throw new Error('متاسفانه مقاله جدید اضافه نشد');
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .insert(newArticle)
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
