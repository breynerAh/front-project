import { getRefreshToken } from "@/application/use-cases/security/refreshToken.use-case";
import { useLoginStore } from "@/presentation/store/security/loginStore";
import { useQuery } from "@tanstack/react-query";
import { FC, createContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const defaultState: { token: string | null; logout: () => void } = {
  token: "",
  logout: () => {},
};

export const AuthContext = createContext(defaultState);

const AuthProvider: FC = () => {
  const { token, setToken } = useLoginStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(token);

  /**
   * Query
   */
  const {
    data: dataOne,
    refetch,
    isSuccess,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["refreshToken", token],
    queryFn: () => getRefreshToken(token ? token : ""),
    enabled: !!token && pathname !== "/login",
    retry: 1,
  });

  const logout = () => {
    setToken("");
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        navigate("/login");
        break;
      case "/login":
        if (token) navigate("/app");
        break;
      default:
        if (
          !token &&
          pathname !== "/recoverPassword" &&
          !pathname.includes("/recoverPassword")
          // pathname !== "/selectCompany"
        )
          navigate("/login");
        else if (token) refetch();
        break;
    }
  }, [pathname, navigate, token, refetch]);

  useEffect(() => {
    if (
      isError &&
      !isLoading &&
      pathname !== "/recoverPassword" &&
      !pathname.includes("/recoverPassword")
    ) {
      setToken("");
      navigate("/login");
    } else if (
      token &&
      dataOne &&
      isSuccess &&
      pathname !== "/login" &&
      pathname !== "/selectCompany"
    ) {
      setToken(dataOne.token);
    }
  }, [
    dataOne,
    isSuccess,
    isLoading,
    navigate,
    isError,
    pathname,
    token,
    setToken,
  ]);

  return (
    <AuthContext.Provider value={{ token, logout }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
