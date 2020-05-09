import React from "react";
import styled from 'styled-components';
import NavBar from "../navBar";
import Flex from "../../components/framework/flex";
import { logos } from "./logos";
import { CenterContent } from "./centerContent";


const getNumColumns = (width) => width > 1000 ? 3 : width > 750 ? 2 : 1;

const ColumnList = styled.ul`
  -moz-column-count: ${(props) => getNumColumns(props.width)};
  -moz-column-gap: 20px;
  -webkit-column-count: ${(props) => getNumColumns(props.width)};
  -webkit-column-gap: 20px;
  column-count: ${(props) => getNumColumns(props.width)};
  column-gap: 20px;
`;

const formatDataset = (requestPath, dispatch, changePage) => {
  return (
    <li className="column is-narrow" key={requestPath}>
      <div
        className="button is-rounded is-primary has-text-dark"
        style={{cursor: "pointer"}}
        onClick={() => dispatch(changePage({path: requestPath, push: true}))}
      >
        <p className="subtitle">{requestPath.toUpperCase()} Dataset</p>
      </div>
    </li>
  );
};

const SplashContent = ({available, browserDimensions, dispatch, errorMessage, changePage}) => {

  const Header = () => (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <img
              alt="logo"
              width="200"
              src={
                require("../../images/nibmg_logo.png") // eslint-disable-line global-require
              }
            />          
            <h2 className="title is-2">
              Interactive Visualization of Phylogenomic data
            </h2>
          </div>
        </div>
      </section>
  );

  const Intro = () => (
  <section className="section">
    <div className="container">
      <p className="subtitle">
      Visualization of the Indian SARS-CoV-2 dataset, powered by auspice, from GISAID and 3 sequences from China included to help shape the phylogenetic tree. 
      All sequences are at least 95% complete (i.e., at most 5% of sites have an ambiguous 'N' nucleotide).
      </p>
    </div>
  </section>
  );

  const ErrorMessage = () => (
    <section class="section">
      <div class="container">
        <p className="subtitle is-2 has-text-danger">
          😱 404, or an error has occured 😱
        </p>
        <p className="subtitle has-text-danger">
          {`Details: ${errorMessage}`}
        </p>
        <p className="subtitle">
           If this keeps happening, or you believe this is a bug, please
          <a href="mailto:aks1@nibmg.ac.in"> get in contact with us.</a>
        </p>        
      </div>
    </section>
  );

  const ListAvailable = ({type, data}) => (
    <section className="section">
      <div className="container">
        <h2 className="title is-4">
          {`Visualize the following ${type}:`}
        </h2>
        {
          data ? (
            <div className="columns is-mobile is-multiline">
                <ColumnList width={browserDimensions.width}>
                  {data.map((d) => formatDataset(d.request, dispatch, changePage))}
                </ColumnList>
            </div>
          ) : (
            <p>
              none found
            </p>
          )
        }
      </div>
    </section>
  );
  const Footer = () => (
    <CenterContent>
      {logos}
    </CenterContent>
  );

  return (
    <>
        <Header/>
        {errorMessage ? <ErrorMessage/> : <Intro/>}
        <ListAvailable type="datasets" data={available.datasets}/>
    </>
  );
};

export default SplashContent;
