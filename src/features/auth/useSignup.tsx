import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

function useSignup() {
  const navigate = useNavigate();

  const {
    mutate: signup,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('ثبت نام با موفقیت انجام شد');
      navigate('/login', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('ایمیل یا پسورد نامعتبر است');
    },
  });
  return { signup, isPending, isSuccess, error };
}

export default useSignup;
