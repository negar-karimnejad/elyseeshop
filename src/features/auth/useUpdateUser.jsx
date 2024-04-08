import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateUser as updateUserApi } from '../../services/apiAuth';

function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending: isUpdating,
    isSuccess,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      toast.success('اطلاعات کاربر با موفقیت ویرایش شد');
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating, isSuccess };
}

export default useUpdateUser;
