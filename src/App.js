import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthContext } from "./components/context/context";
import { useState } from "react";

function App() {

const [isAuth, setIsAuth] = useState(false);
console.log(isAuth);

  return (
    <div className="App body-app">

      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
        <Header />
        <AppRouter></AppRouter>
      </BrowserRouter>
      <Footer></Footer>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
