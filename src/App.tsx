import React, { useState } from 'react'
import {Header} from "./components/Header/Header";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./components/pages/MainPage/MainPage";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path={'/'} element={<MainPage/>}></Route>
          <Route path={'/happiness'} element={<Header/>}></Route>
          <Route path={'/business'} element={<div><Header/><Header/></div>}></Route>
          <Route path={'/love'} element={""}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
