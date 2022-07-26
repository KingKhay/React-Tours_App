import { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";
import "./index.css";
const App = () => {
  const [places, setPlaces] = useState(data);
  const handleDelete = (id) => {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  };
  return (
    <>
      <section className="container">
        <div className="heading">
          <h1>Our Tours</h1>
          <div className="underline"></div>
        </div>
        <div className="tours">
          <Tours places={places} handleDelete={handleDelete} />
        </div>
      </section>
    </>
  );
};

export default App;
