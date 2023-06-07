import { Route, Routes } from "react-router-dom";

import Posts from "../pages/Posts";
import FormAuth from "../pages/FormAuth";

import CaseIdPage from "../pages/CaseIdPage";
import Case from "../pages/Case";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { RecuierAuth } from "../hoc/RecuierAuth";
import FormSignUp from "../formSignUp/formSignUp";


const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>

      <Route path="/posts" element={<Posts></Posts>} />
      <Route path="/formauth" element={<FormAuth></FormAuth>} />
      <Route path="/formsignup" element={<FormSignUp></FormSignUp>} />

      <Route path="/case" element={
        <RecuierAuth>
          <Case></Case>
        </RecuierAuth>
      } />
      <Route path="case/:id" element={
        <RecuierAuth>
          <CaseIdPage></CaseIdPage>
        </RecuierAuth>
      } />

    </Routes>
  )

}

export default AppRouter;