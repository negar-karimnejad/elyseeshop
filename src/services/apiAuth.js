import supabase from './supabase';

export async function signup({ email, password, username, role }) {
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          role,
        },
      },
    });

    if (error) {
      console.error(error);
      throw new Error('متاسفانه ثبت نام انجام نشد');
    }
console.log("🎁",data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      throw new Error('متاسفانه لاگین انجام نشد');
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error('متاسفانه عملیات با موفقیت انجام نشد');
  }

  return data?.user;
}

export async function logout() {
  try {
    let { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      throw new Error('متاسفانه عملیات با موفقیت انجام نشد');
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUser({ username }) {
  let updateData;
  // if (password) updateData = { password };
  if (username) updateData = { data: { username } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) {
    console.error(error);
    throw new Error('متاسفانه ویرایش با موفقیت انجام نشد');
  }

  return data;
}
