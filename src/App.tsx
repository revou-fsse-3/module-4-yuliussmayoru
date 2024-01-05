import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import List from "./pages/category/List";
import Edit from "./pages/category/Edit";
import Add from "./pages/category/Add";
import { Provider } from "./Provider";
import PublicLayout from "./layouts/PublicLayout";
import { useMemo } from "react";

const PrivateOutlet = () => {
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate();
  const isAuth = useMemo(
    () => !!token,
    [navigate]
  )
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <Provider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
