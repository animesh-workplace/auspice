import React from "react";
import "../../css/loader.css"

const Spinner = ({availableHeight=false}) => {
	const Loader = ()=>(
		<section className="section">
			<div className="container">
				<svg className="loader_svg" viewBox="-2000 -1000 4000 2000">
					<path id="infinity_loader" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
					<use xlinkHref="#infinity_loader" strokeDasharray="1570 5143" strokeDashoffset="6713px"></use>
				</svg>		
			</div>
		</section>	
		);

  return (
	  <section className="hero is-info is-fullheight">
	    <div className="hero-body">
	      <div className="container has-text-centered">
		  	<Loader/>
	      </div>
	    </div>
	  </section>
  );
};

export default Spinner;


