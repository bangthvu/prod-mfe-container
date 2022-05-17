import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { Forside } from 'forside/Forside';
import { Artikelside } from 'artikelside/Artikelside';
import "./index.css";

const API_URL = "http://localhost:8084"



export const App = () => {
  const [artData, setArtData] = useState([]);
  
  useEffect(() => {
  
    async function getData() {
      const url = `${API_URL}/api/articles`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setArtData(data);
    }
    getData();
  }, []);


  async function getOneArticle(id) {
    const url = `${API_URL}/api/articles${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

  return (
  <Router>
  <div>
  <Header/>
  <Routes>
    <Route path="/" element={<Forside getArtData={artData}/>}></Route>
    <Route path="/:id" element={<Artikelside getArtData={artData} getOneArticle={getOneArticle}/>}></Route>
    </Routes>
    <Footer/>
  </div>
  </Router>
)};


ReactDOM.render(<App />, document.getElementById("app"));
