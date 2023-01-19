import React, { useEffect, useState } from "react";

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
            <div className="container mx-auto mt-4">
              <div className="row">
                <div className="col-md--4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={item.show.image.medium}
                      alt={item.show.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.show.name}</h5>
                      <article className="card-subtitle mb-2 text-muted">
                        {item.show.summary}
                      </article>
                      <a href={item.show.url} className="btn mr-2">
                        <i className="fas fa-link"></i> Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
