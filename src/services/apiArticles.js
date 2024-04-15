import supabase from './supabase';

export async function getArticles() {
  try {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*');

    if (error) {
      console.error(error);
      throw error('مقالات بارگذاری نشدند');
    }
    return articles;
  } catch (error) {
    console.error('Error getting articals:', error.message);
    throw error;
  }
}

export async function getArticle(id) {
  try {
    const { data: article, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id);
    if (error) {
      console.error(error);
      throw new Error('مقاله مورد نظر بارگذاری نشد');
    }
    return article;
  } catch (error) {
    console.error('Error getting artical:', error.message);
    throw error;
  }
}

export async function addArticle(newArticle) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .insert(newArticle)
      .select();

    if (error) {
      console.error(error);
      throw new Error('مقاله جدید اضافه شد');
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
      .update(updatedArticle) //موارد اپدیت شده را داخل {} یک به یک بنویس
      .eq('some_column', 'someValue')
      .select();
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
