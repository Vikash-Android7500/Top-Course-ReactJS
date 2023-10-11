import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <section className="flex flex-col items-center space-y-2">
      <span className="spinner"></span>
      <p className="text-white text-lg font-semibold tracking-widest">
        Loading....
      </p>
    </section>
  );
};

export default Spinner;
