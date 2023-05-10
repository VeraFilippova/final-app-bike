import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfficerPage from "./components/pages/Case";
import Posts from "./components/pages/Posts";
import FormAuth from "./components/pages/FormAuth";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="App body-app">
      <BrowserRouter>
        <Header />
        <AppRouter></AppRouter>

        
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
