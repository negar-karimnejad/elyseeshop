import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
      toast.success('با موفقیت وارد حساب کاربری شدید');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('ایمیل یا پسورد نامعتبر است');
    },
  });

  return { login, isPending, isSuccess };
}

export default useLogin;
