import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template  */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
        </Route>

        {/* auth template => xử lý các tác vụ khác: đăng kí, ....  */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
