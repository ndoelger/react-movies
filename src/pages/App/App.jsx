import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorsListPage from "../ActorsListPage/ActorsListPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState("hi");

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MoviesListPage/>} />
          <Route path="/movies/:movieName" element={<MovieDetailPage/>} />
          <Route path="/actors" element={<ActorsListPage/>} />
        </Routes>
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}
