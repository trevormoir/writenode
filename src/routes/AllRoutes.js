import { Routes, Route } from 'react-router-dom';

import { HomePage, CreatePost, PageNotFound } from "../pages";
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = ({isAuth, setIsAuth}) => {
  return (
    <main className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<HomePage title="Home" isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
        <Route path="create" element={<ProtectedRoutes><CreatePost /></ProtectedRoutes>}></Route>
        <Route path="*" element={<PageNotFound />} ></Route>
      </Routes>
    </main>
  )
}
