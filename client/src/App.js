// Import dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

// Import Pages
import HomePage from "./pages/HomePage";
import AddMoviePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";

// Define the function that renders the content in routes using State.
function App() {
  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>
        <header>
          <h1>Collection of Exercises</h1>
          <p>
            This applications shows a list of exercises. You can add, edit, and
            delete exercises. As a computer science major you probably spend a
            lot of time behind a computer, so lets get out there and get moving
            with the help of the exercise app!
          </p>
        </header>
        <nav>
          <Navigation />
        </nav>

        <main>
          <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddMoviePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
        </main>

        <footer>
          <p> @ 2022 Forest Schwartz</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
