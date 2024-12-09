import { GetAllUser } from "@/application/use-cases/security/user/getAllUser.use-case";
import { useUserStore } from "@/presentation/store/security/user";
import { useQuery } from "@tanstack/react-query";

export default function useUserList() {
  const { updateUserId } = useUserStore();

  // Get all user
  const { data: dataGetAllUser, isLoading } = useQuery({
    queryKey: ["GetAllUserList"],
    queryFn: () => GetAllUser(),
  });

  const editUser = (id: number) => {
    updateUserId(id);
  };

  return { dataGetAllUser, isLoading, editUser };
}
