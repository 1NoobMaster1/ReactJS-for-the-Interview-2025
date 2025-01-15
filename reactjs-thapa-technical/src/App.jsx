// import React from "react";

import NetflixSeries, { Header, Footer } from "./components/NetflixSeries";
import React from "react";

// export const App = () => {
//   return<h1>Ayan Khan!</h1>
// };

// export const App = () => {
//   return React.createElement("h1", null, "Ayan Khan");
// };

// console.log(React.createElement("h1", null, "Ayan Khan"));

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NetflixSeries />
      <Footer />
    </React.Fragment>
    // return ([<NetflixSeries key="1"/>, <NetflixSeries key="2"/>, <NetflixSeries key="3"/>]
    // <div>
    //   <NetflixSeries />
    //   <NetflixSeries />
    //   <NetflixSeries />
    // </div>
  );
};
