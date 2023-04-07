import React, { useState } from 'react'
import {Header} from "./components/Header/Header";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./components/pages/MainPage/MainPage";
import {CategoryPage} from "./components/pages/CategoryPage/CategoryPage";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path={'/'} element={<MainPage/>}></Route>
          <Route path={'/happiness'} element={<CategoryPage category={'happiness'} limit={4}/>}></Route>
          <Route path={'/business'} element={<CategoryPage category={'business'} limit={5}/>}></Route>
          <Route path={'/love'} element={<CategoryPage category={'love'} limit={6}/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
