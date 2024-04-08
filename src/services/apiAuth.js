import { toast } from 'react-toastify';
import supabase from './supabase';

export async function signup(email, password, username) {
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      username,
    });

    if (error) {
      console.error(error);
      toast.error(error.message);
      throw new Error('Get problem while logging user');
    }

    toast.success('ثبت نام شما با موفقیت انجام شد');
    return data;
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
}

export async function login(email, password) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      toast.error(error.message);
      throw new Error('Get problem while logging user');
    }

    toast.success('شما با موفقیت وارد حساب خود شدید');
    return data;
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
}
export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error('Get problem while getting user');
  }

  return user;
}

export async function logout() {
  try {
    let { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      toast.error(error.message);
      throw new Error('Get problem while logging out user');
    }
    toast.success('شما با موفقیت از حساب خود خارج شدید');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
}

export async function updateUser(email, password, username) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { username },
  });
  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error('Get problem while updating user');
  }

  toast.success('اطلاعات شما با موفقیت بروزرسانی شد');
  return data;
}
