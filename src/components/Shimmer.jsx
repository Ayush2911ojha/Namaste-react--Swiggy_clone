import React, { Component } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

class Example extends Component {
  render() {
    return (
      <>
            {/* Circular images with captions */}
            <div >

        <p ><ShimmerSimpleGallery  imageType="thumbnail " imageHeight={200} caption /></p>

        {/* Card style with variable image heights */}
         <p><ShimmerSimpleGallery card imageHeight={300} /></p>

        {/* Card style with variable image heights and captions */}
                <ShimmerSimpleGallery card imageHeight={300} caption />
                </div>
      </>
    );
  }
}

export default Example;