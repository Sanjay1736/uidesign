import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = ({ match }) => {
  const [show, setShow] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${match.params.id}`)
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      {/* <button onClick={() => openBookingForm(show.name)}>Book Ticket</button> */}
    </div>
  );
};
export default Summary;
