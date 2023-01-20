import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BookingForm from "./Components/BookingForm";
import Mainpage from "./Components/Mainpage";
import axios from "axios";

function App() {
  const [showName, setShowName] = useState("");
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setShowName(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Router>
        <Route
          exact
          path="/"
          render={(props) => < {...props} shows={shows} />}
        />
        <Route
          path="/show/:id"
          render={(props) => <ShowSummary {...props} shows={shows} />}
        />
        <Route path="/booking" component={BookingForm} />
      </Router>
    </div>
  );
}

export default App;
