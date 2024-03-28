import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    //code
  };

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
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="ایمیل"
          className="p-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="رمز عبور"
          className="p-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          className="w-full rounded-sm dark:bg-white dark:text-black dark:hover:bg-pink-600 dark:hover:text-white"
        >
          ثبت نام
        </Button>
      </form>
    </div>
  );
}

export default Register;
