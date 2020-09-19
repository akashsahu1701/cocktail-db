import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return <section className="error-page section">
    <div className="error-container">
      <h1> Ooopss! You Reach the Dead End</h1>
      <Link to="/"><button className="btn btn-primary">Back To Home</button></Link>
    </div>
  </section>;
}
