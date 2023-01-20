import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link, NavLink } from "react-router-dom";
import BookingForm from "./BookingForm";
const Mainpage = () => {
  const Base_URL = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(Base_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
    //   console.log(data.data);
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <> 
              {data.map((item) => {
                return (
                  <div key={item.show.id}>
                    <h2>{item.show.name}</h2>
                    <img src={item.show.image.medium} />
                    <p>{parse(item.show.summary)}</p>
                    {/* <NavLink to={`/show/${item.show.summary}`}>View Summary</NavLink> */}
                        <NavLink to='/booking' >Book Tickets</NavLink>
                        <BookingForm showName={data.show.name}/>
                       
                  </div>
                );
              })}
          </>
        );
      })}
    </div>
  );
};

export default Mainpage;
//  <div>
//    <p>{item.show.name}</p>
//    <a href={item.show.url}>{item.show.url}</a>
//    <p>{item.show.language}</p>
//    <p>{item.show.type}</p>
//    <div>{item.show.genres}</div>
//    <div>{item.show.status}</div>
//    <div>{item.show.runtime}</div>
//    <div>{item.show.officialSite}</div>
//    <div>{item.show.schedule.time}</div>
//    <img src={item.show.image.medium} />
//    <img src={item.show.image.original} />
//  </div>;
