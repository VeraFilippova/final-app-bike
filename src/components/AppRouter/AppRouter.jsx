import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import FormAuth from "../pages/FormAuth";

import CaseIdPage from "../pages/CaseIdPage";
import Case from "../pages/Case";


const AppRouter =()=>{
  return(
    <Routes>
        {/* <Route path="/*" element={<Posts></Posts>} /> */}
          <Route path="/posts" element={<Posts></Posts>} />
          <Route path="/formauth" element={<FormAuth></FormAuth>} />
          <Route  path="/case" element={<Case></Case>} />
          <Route  path="case/:id" element={<CaseIdPage></CaseIdPage>} />

        </Routes>
  )

}

export default AppRouter;