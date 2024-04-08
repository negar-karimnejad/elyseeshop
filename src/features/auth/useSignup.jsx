import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { signup as signupApi } from '../../services/apiAuth';

function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.error('ثبت نام با موفقیت انجام شد');
    },
  });
  return { signup, isPending };
}

export default useSignup;
