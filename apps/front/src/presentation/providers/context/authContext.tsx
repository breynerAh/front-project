import { useLoginStore } from "@/presentation/store/security/loginStore";
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
        if (!token) navigate("/login");
        break;
    }
  }, [pathname, navigate, token]);

  return (
    <AuthContext.Provider value={{ token, logout }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
