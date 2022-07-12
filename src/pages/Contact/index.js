import React from 'react';
import useWindowDimensions from "../../dimensions.js";
import Details from './Details';
import Email from './Email';

export default function Contact() {

    const { width, height } = useWindowDimensions();

  return (
    <div style={{display: 'flex', flexDirection: width >= height ? 'row' : 'column', flex: 1, height: width >= height ? height - 56 : null, minHeight: height - 56}}>
        <Details/>
        <Email/>
    </div>
  )
}
