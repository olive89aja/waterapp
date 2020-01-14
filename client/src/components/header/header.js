import React from "react";
import header from "./header.css";

export default function header() {
  return (
    <header className="header">
      <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/"></a>
        <a href="/"></a>
        <a href="/"></a>
      </nav>
    </header>
  );
}
