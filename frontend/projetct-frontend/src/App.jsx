// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarsModel from "./pages/CarsModel";
import Navbar from "./components/Navbar";
import './style.css';
import DefaultLayout from "./layout/DefaultLayout";
import CarsDataAnalyst from "./pages/CarsDataAnalyst";
import HousesDataAnalyst from "./pages/HousesDataAnalyst";
import Test from "./pages/Test";
import CarsCleaning from "./pages/CarsCleaning";
import HousesCleaning from "./pages/HousesCleaning";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route without Layout */}
        <Route path="/" element={<Home />} />
        
        {/* Routes with Default Layout */}
        <Route
          path="/Analyse/cars"
          element={
            <DefaultLayout>
              <CarsDataAnalyst />
            </DefaultLayout>
          }
        />
        <Route
          path="/Analyse/houses"
          element={
            <DefaultLayout>
              <HousesDataAnalyst />
            </DefaultLayout>
          }
        />
        <Route
          path="/Models/Cars-model"
          element={
            <DefaultLayout>
              <CarsModel />
            </DefaultLayout>
          }
        />
        <Route
          path="/Data_Cleaning/Cars"
          element={
            <DefaultLayout>
              <CarsCleaning/>
            </DefaultLayout>
          }
        />
        <Route
          path="/Data_Cleaning/Houses"
          element={
            <DefaultLayout>
              <HousesCleaning/>
            </DefaultLayout>
          }
        />
        <Route
          path="/test"
          element={
              <Test/>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
