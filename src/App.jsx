import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { Forside } from 'forside/Forside';
import { Artikelside } from 'artikelside/Artikelside';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://prod-mfe-server.herokuapp.com"



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


  return (
  <Router>
  <div>
  <Header/>
  <Routes>
    <Route path="/" element={<Forside getArtData={artData}/>}></Route>
    <Route path="/:id" element={<Artikelside getArtData={artData}/>}></Route>
    </Routes>
    <Footer/>
  </div>
  </Router>
)};


ReactDOM.render(<App />, document.getElementById("app"));
