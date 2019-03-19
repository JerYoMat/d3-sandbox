import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

const App = () => {
  let linearScale = d3.scaleLinear()
    .domain([0,100])
    .range([0,600])
    .clamp(true);  // limits values to the top of the range
  
    return (
    <ul>
      <li>{linearScale(0)}</li>
      <li>{linearScale(50)}</li>
      <li>{linearScale(105)}</li>
    </ul>
  )

}




ReactDOM.render(<App />, document.getElementById('root'));


