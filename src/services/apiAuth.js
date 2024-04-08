import supabase from './supabase';

export async function signup({ email, password, username }) {
  console.log(email, password, username);
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      console.error(error);
      throw new Error('Get problem while logging user');
    }

    return data;
  } catch (error) {
    console.error('Error signing up:', error.message);
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
      throw new Error('Get problem while logging user');
    }

    return data;
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error('Get problem while getting user');
  }

  return data?.user;
}

export async function logout() {
  try {
    let { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      throw new Error('Get problem while logging out user');
    }
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
}

export async function updateUser({ password, username }) {
  let updateData;
  if (password) updateData = { password };
  if (username) updateData = { data: { username } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) {
    console.error(error);
    throw new Error('Get problem while updating user');
  }

  return data;
}
