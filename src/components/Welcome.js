// write code for Welcome component here

import React from "react";
// import '../styles/App.css';

const Welcome = ({ name }) => {
    console.log(name);
    return <React.Fragment>
        <h1>Hey {name}!</h1>
        <h2>Welcome to Newton School.</h2>
    </React.Fragment>
};
export default Welcome;



