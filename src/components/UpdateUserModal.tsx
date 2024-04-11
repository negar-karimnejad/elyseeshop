import { FormEvent, useState } from 'react';
import useUpdateUser from '../features/auth/useUpdateUser';
import useUser from '../features/auth/useUser';
import Button from './Button';
import Input from './Input';

interface UpdateUserModalProps {
  closeModal: () => void;
}

function UpdateUserModal({ closeModal }: UpdateUserModalProps) {
  const { user } = useUser();
  const currentUsername = user?.user_metadata?.username ?? ''; // Access username safely

  const { isUpdating, updateUser } = useUpdateUser();
  const [username, setUsername] = useState<string | ''>(currentUsername);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser({ username });

    closeModal();
  };

  return (
    <div
      onClick={closeModal}
      className="fixed right-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-black/50 dark:bg-black/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-10 w-[500px] rounded-md bg-white p-10 dark:bg-stone-700"
      >
        <p className="text-lg text-stone-600 dark:text-stone-200">
          ویرایش نام کاربر
        </p>
        <form onSubmit={submitHandler} className="mt-5 flex flex-col gap-5">
          <Input
            placeholder="نام کاربری"
            className="p-3"
            type="text"
            value={username}
            disabled={isUpdating}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            onClick={() => {}}
            type="submit"
            disabled={isUpdating}
            className="w-full rounded-md bg-sky-600 px-12 hover:bg-sky-700 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            {isUpdating ? 'در حال ویرایش' : 'ویرایش'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserModal;
