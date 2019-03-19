import React from 'react';
import * as d3 from "d3";

const LinearScaleExample = () => {
  let linearScale = d3.scaleLinear()
    .domain([0,100])
    .range([0,600])
    .clamp(true);  // limits values to the top of the range
  
    return (
    <ul>
      Range 0 - 600
      domanin 0-100
      clamp true
      <li>{linearScale(0)}</li>
      <li>{linearScale(50)}</li>
      <li>{linearScale(105)}</li>
      Example of Invert with val 60
      <li>{linearScale.invert(60)}</li>
  
    </ul>
  )

}

export default LinearScaleExample;
