import React from "react";
import ResultTab from "./ResultTab";

const ResultTabs = props =>{
    return(
        <div className="tabs">
            <div className="tabs__items">
                {props.resultSites.map( ( result ) => {
                    return (
                        <ResultTab
                            result={result}
                            key={Math.random().toString()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ResultTabs;