import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Journal from "./pages/Journal";
import Comptes from "./pages/Comptes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate replace to="/journal" />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/comptes" element={<Comptes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
