import React, { useState, useRef } from "react";
import AddWorkoutForm from "./AddWorkoutForm";

const Test = ({ workouts }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Add your form refs here (focusRef, exerciseNameRef, setsRef, repsRef)

  const openModal = () => {
    setFormVisible(true);
  };

  const closeModal = () => {
    setFormVisible(false);
  };

  const modalStyle = {
    display: isFormVisible ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  };

  const modalContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const closeStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <>
      <button onClick={openModal}>Create Routine</button>

      <div style={modalStyle} className="modal">
        <div style={modalContentStyle} className="modal-content">
          <span style={closeStyle} className="close" onClick={closeModal}>
            &times;
          </span>

          <AddWorkoutForm closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};

export default Test;
