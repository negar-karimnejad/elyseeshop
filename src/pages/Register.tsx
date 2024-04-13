import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import useSignup from '../features/auth/useSignup';
import useUser from '../features/auth/useUser';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const { isPending, signup, isSuccess } = useSignup();
  const { user } = useUser();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup({ username, email, password, role });
    if (isSuccess) {
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (username && username.length < 3) {
      setUsernameError('نام کاربری باید حداقل 3 کاراکتر باشد');
    } else {
      setUsernameError('');
    }

    if (password && password.length < 6) {
      setPasswordError('رمز کاربری باید حداقل 6 کاراکتر باشد');
    } else {
      setPasswordError('');
    }
  }, [password, username]);

  useEffect(() => {
    if (isSuccess || user !== null) {
      navigate('/dashboard');
    }
  }, [isSuccess, navigate, user]);

  if (user !== null) {
    return <Loader title="در حال انتقال ..." />;
  }

  return (
    <div className="container my-10 md:mx-auto md:w-1/2 lg:w-1/3">
      <p className="text-lg text-stone-600 dark:text-stone-200">
        ثبت نام کاربر جدید
      </p>
      <form onSubmit={submitHandler} className="mt-5 flex flex-col gap-3">
        <Input
          placeholder="نام کاربری"
          className="p-3"
          type="text"
          value={username}
          disabled={isPending}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        {usernameError && <p className="text-red-500">{usernameError}</p>}
        <Input
          placeholder="ایمیل"
          className="p-3"
          type="email"
          value={email}
          disabled={isPending}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          placeholder="رمز عبور"
          className="p-3"
          type="password"
          value={password}
          disabled={isPending}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            if (password.startsWith('admin')) {
              setRole('admin');
            } else {
              setRole('user');
            }
          }}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <Button
          onClick={() => {}}
          variant=""
          type="submit"
          disabled={isPending}
          className="w-full rounded-sm dark:bg-white dark:text-black dark:hover:bg-pink-600 dark:hover:text-white"
        >
          ثبت نام
        </Button>
      </form>
      <Link
        to="/login"
        className="mx-auto mt-2 block w-fit text-sm text-stone-600 transition-all hover:text-pink-600 hover:underline dark:text-stone-200 dark:hover:text-pink-500"
      >
        ورود به حساب کاربری
      </Link>
    </div>
  );
}

export default Register;
