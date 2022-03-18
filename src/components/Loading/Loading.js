import React from "react";
import "./Loading.css";
import logo from "../../logo.svg";

export default function Loading() {
  return (
    <div className="loading">
      <div>
        <img src={logo} alt="" />{" "}
        <p>
          <strong>Loading...</strong>
        </p>
      </div>
    </div>
  );
}
