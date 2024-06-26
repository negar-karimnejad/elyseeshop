import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import useLogin from '../features/auth/useLogin';
import useUser from '../features/auth/useUser';

function Login() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { isPending, login, isSuccess } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError('رمز کاربری باید حداقل 6 کاراکتر باشد');
    } else {
      setPasswordError('');
    }
  }, [password]);

  useEffect(() => {
    if (isSuccess || user !== null) {
      navigate('/dashboard');
    }
  }, [isSuccess, navigate, user]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email, password });

    if (isSuccess) {
      setEmail('');
      setPassword('');
    }
  };

  if (user !== null) {
    return <Loader title="در حال انتقال ..." />;
  }

  return (
    <div className="container my-10 md:mx-auto md:w-1/2 lg:w-1/3">
      <p className="text-lg text-stone-600 dark:text-stone-200">
        ورود به حساب شخصی
      </p>
      <form onSubmit={submitHandler} className="mt-5 flex flex-col gap-3">
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <Button
          type="submit"
          onClick={() => {}}
          disabled={isPending || Boolean(passwordError)}
          className="w-full rounded-sm dark:bg-white dark:text-black dark:hover:bg-pink-600 dark:hover:text-white"
        >
          ورود به حساب کابری
        </Button>
      </form>
      <Link
        to="/register"
        className="mx-auto mt-2 block w-fit text-sm text-stone-600 transition-all hover:text-pink-600 hover:underline dark:text-stone-200 dark:hover:text-pink-500"
      >
        ثبت نام کاربر جدید
      </Link>
    </div>
  );
}

export default Login;
