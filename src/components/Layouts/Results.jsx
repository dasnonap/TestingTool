import React from "react";
import ResultsListing from "../Sections/ResultsListing";

const Results = (props) => {
    return(
        <div className="results">
            <div className="results__head">
                <h2>
                    Results tab
                </h2>
            </div>

            <div className="results__inner">
                <ResultsListing />
            </div>
        </div>
    );
};

export default Results;