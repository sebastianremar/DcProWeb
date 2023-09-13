import React from "react";
import './style.css';

const Portada: React.FC = () => {
  return (
    <div className="container-portada">
      <div className="portada">
      </div>
      <div className="book-now-portada">
        <p>
          Air Duct & Dryer Vent Cleaning
        </p>
        <div className="button-container-portada">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Portada;

