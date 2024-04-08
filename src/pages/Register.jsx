import { useState } from 'react';
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

  const navigate = useNavigate();

  const { isPending, signup, isSuccess } = useSignup();
  const { user } = useUser();

  const submitHandler = (e) => {
    e.preventDefault();
    signup({ username, email, password });
    if (isSuccess) {
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };
  if (user !== null) {
    navigate('/dashboard');
    return <Loader title="در حال انتقال..." />;
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="ایمیل"
          className="p-3"
          type="email"
          value={email}
          disabled={isPending}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="رمز عبور"
          className="p-3"
          type="password"
          value={password}
          disabled={isPending}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
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
