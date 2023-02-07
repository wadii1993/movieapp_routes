import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headernav/HeaderNav";
import { moviedata } from "./Data";
import MovieList from "./components/movielist/MovieList";
import { useState } from "react";

import DetailMovie from "./components/detailsmovie/DetailMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [movy, setMovy] = useState(moviedata);

  const handledelete = (idmovie) => {
    setMovy(movy.filter((el) => el.id !== idmovie));
  };
  const hundleAdd = (newMovie) => {
    if (newMovie) {
      const newList = [
        ...movy,
        {
          id: Math.random(),
          urlmovie_img: newMovie.urlmovie_img,
          rate: newMovie.rate,
          titre: newMovie.titre,
          date: newMovie.date,
          trailerurl: newMovie.trailerurl,
          description: newMovie.description,
        },
      ];
      setMovy(newList);
    } else {
      alert("please enter a valid movie");
    }
  };
  const [search, setSearch] = useState("");
  const searchbytitle = (e) => {
    setSearch(e.target.value);
  };
  const [ratefil, setRatefil] = useState(0);
  const searchbyrate = (ratefil) => {
    setRatefil(ratefil);
  };

  return (
    <div className="App App-header">
      <BrowserRouter>
        <HeaderNav searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movie={movy.filter(
                  (elt) =>
                    elt.titre
                      .trim()
                      .toLocaleLowerCase()
                      .includes(search.trim().toLowerCase()) &&
                    elt.rate >= ratefil
                )}
                del={handledelete}
                search={search}
                hundleAdd={hundleAdd}
              />
            }
          />
          {/* <Route path="/" element={<AddMovie hundleAdd={hundleAdd} />} /> */}

          <Route
            path="/detailsmovie/:id"
            element={<DetailMovie movy={movy} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
