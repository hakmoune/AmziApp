import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Journal from "./pages/Journal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate replace to="/journal" />} />
          <Route path="/journal" element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
