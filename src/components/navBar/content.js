import React from "react";
import styled from 'styled-components';

const logoPNG = require("../../images/nibmg_logo.png");

const AuspiceNavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Title = styled.a`
  padding: 0px;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;
const LogoLink = styled.a`
  padding: 5px 5px;
  width: 70px;
  cursor: pointer;
`;
const NarrativeTitle = styled.div`
  white-space: nowrap;
  font-size: 1.7rem;
  margin-left: auto;
  padding: 0px 12px;
  float: right;
  color: ${(props) => props.theme.color};
  max-width: ${(props) => props.width - 90}px;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const renderTitle = (narrativeTitle, width) => {
  if (narrativeTitle) {
    return (
      <NarrativeTitle width={width} href="/">
        {narrativeTitle}
      </NarrativeTitle>
    );
  }
  return (
    <Title href="/">
      {"NIBMG"}
    </Title>
  );
};

export const AuspiceNavBar = ({narrativeTitle, sidebar, width}) => {
  if (!sidebar) return null;
  return (
    <AuspiceNavBarContainer>
      <div style={{flex: 1}}/>
      <LogoLink href="/">
        <img alt="splashPage" width="40px" src={logoPNG}/>
      </LogoLink>
      <div style={{flex: 1}}/>
      {renderTitle(narrativeTitle, width)}
      <div style={{flex: 1}}/>
    </AuspiceNavBarContainer>
  );
};
