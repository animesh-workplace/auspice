import React from "react";
import styled from 'styled-components';

const logoPNG = require("../../images/nibmg_logo.png");

export const AuspiceNavBar = ({narrativeTitle, sidebar, width}) => {
  if (!sidebar) return null;
  return (
  <div className="column has-text-centered">
      <a href="/">
        <img alt="splashPage" width="90px" src={logoPNG}/>
      </a>
  </div>
  );
};
