import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template  */}

        {/* auth template => xử lý các tác vụ khác: đăng kí, ....  */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
