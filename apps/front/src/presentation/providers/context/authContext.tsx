import { useLoginStore } from "@/presentation/store/security/loginStore";
import { FC, createContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const defaultState: { token: string | null } = {
  token: "",
};

const AuthContext = createContext(defaultState);

const AuthProvider: FC = () => {
  const { token } = useLoginStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    <AuthContext.Provider value={{ token }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
