import { useState } from "react";
const Tour = ({ id, name, price, description, image, handleDelete }) => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="tour-lower">
        <div className="tour-text">
          <h2>{name}</h2>
          <h4 className="price">${price}.00</h4>
        </div>
        <div>
          <p>
            {showMore ? description.substring(0, 120) : description}...
            <button onClick={() => setShowMore(!showMore)} className="show-btn">
              {showMore ? "Read More" : "Read Less"}
            </button>
          </p>
        </div>
      </div>
      <button className="not-interested-btn" onClick={() => handleDelete(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
