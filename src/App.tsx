import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  const [answer, setAnswer] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    if (choice === "yes") {
      setAnswer("Good choice! 👍");
    } else {
      setAnswer("Damn! 👎");
    }
  };

  return (
    <div className="container text-center mt-5">
      {/* Card Container */}
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1 className="mb-4">Do you like React? 🤔</h1>
        {/* Buttons */}
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-success btn-lg d-flex align-items-center"
            style={{ gap: "10px" }}
            onClick={() => handleChoice("yes")}
          >
            <span role="img" aria-label="yes">
              ✅
            </span>
            Yes
          </button>
          <button
            className="btn btn-danger btn-lg d-flex align-items-center"
            style={{ gap: "10px" }}
            onClick={() => handleChoice("no")}
          >
            <span role="img" aria-label="no">
              ❌
            </span>
            No
          </button>
        </div>
        {/* Result Section */}
        {answer && (
          <div
            className="mt-4 alert alert-info"
            role="alert"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
