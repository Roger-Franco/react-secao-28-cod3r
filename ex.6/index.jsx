import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <div>
    <Family lastName="Silva">
      <Member name="João" />
      <Member name="Thu" />
      <Member name="Rog" />
    </Family>
  </div>
  , document.getElementById("app"));