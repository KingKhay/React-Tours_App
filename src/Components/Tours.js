import Tour from "./Tour";
import "../index.css";

const Tours = ({ places, handleDelete }) => {
  return (
    <>
      {places.map((place) => {
        return (
          <div key={place.id}>
            <Tour {...place} handleDelete={handleDelete} />
          </div>
        );
      })}
    </>
  );
};

export default Tours;
