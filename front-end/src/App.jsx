// import logo from './logo.svg';
// import './assets/styles/App.scss';
import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import WebApps from './pages/WebApps';
import Contact from './pages/Contact';
import ToDoList from "./pages/apps/ToDoList";
import NoteKeeper from "./pages/apps/NoteKeeper";
import WeatherApp from "./pages/apps/WeatherApp";



function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/apps' element={<WebApps />} />
        <Route path='/apps/to-do-list' element={<ToDoList />} />
        <Route path='/apps/note-keeper' element={<NoteKeeper />} />
        <Route path='/apps/weather-app' element={<WeatherApp />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
