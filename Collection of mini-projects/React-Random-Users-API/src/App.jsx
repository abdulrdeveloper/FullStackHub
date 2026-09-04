import { useState, useEffect } from "react";
import "./App.css";

// const shows = [
//   {
//     id: 1,
//     title: "The Component Returns",
//     time: "10:00 AM",
//     hall: "Hall A",
//   },
//   {
//     id: 2,
//     title: "Attack of the Re-render",
//     time: "12:30 PM",
//     hall: "Hall B",
//   },
//   {
//     id: 3,
//     title: "Virtual DOM Nights",
//     time: "04:00 PM",
//     hall: "Hall C",
//   },
// ];

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setShows([data.data]);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <div>
      <section className="grid">
        {shows.map((show) => (
          <div key={show.login.uuid} className="card">
            <h2 className="title">
              {show.name.title} {show.name.first} {show.name.last}
            </h2>

            <p className="gender-row">Gender: {show.gender}</p>
            <p className="age-row">Age: {show.dob.age}</p>
            <p className="dob-row">Date of Birth: {show.dob.date}</p>

            <p className="email-row">Email: {show.email}</p>
            <p className="phone-row">Phone: {show.phone}</p>
            <p className="cell-row">Cell: {show.cell}</p>

            <p className="city-row">City: {show.location.city}</p>
            <p className="state-row">State: {show.location.state}</p>
            <p className="country-row">Country: {show.location.country}</p>
            <p className="postcode-row">Postcode: {show.location.postcode}</p>

            <p className="username-row">Username: {show.login.username}</p>
            <p className="nationality-row">Nationality: {show.nat}</p>
          </div>
        ))}

      </section>

      {/* <section className="grid">
      {shows.map((show) => (
        <div className="card">
          <span className="muted">{show.title}</span>
          <h2 className="title">{show.time}</h2>
          <p className="tag">{show.hall}</p>
        </div>
      ))}
    </section> */}
    </div>
  );
}
export default App;
