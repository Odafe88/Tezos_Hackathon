import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './App.css'
import HomePage from './pages/Home'
import Header from "./components/Header";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

const Root = () => {
  return (
    
      <div >
        <Outlet />
      </div>
  );
};

export default App
