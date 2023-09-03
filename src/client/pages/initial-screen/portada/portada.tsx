import React from "react";
import './style.css'; // Import your custom CSS file


const Portada: React.FC = () => {
  return (
    <div className="container-portada">
      <div className="portada">
      </div>
      <div className="book-now">
        <p>
          Air Duct & Dryer Vent Cleaning
        </p>
        <div className="button-container">
          <button>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portada;
