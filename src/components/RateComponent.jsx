import React from "react";

function RateComponent({ post }) {
  return (
    <div>
   {post.txt}
      <p> {post.cc} = {post.rate} UAH</p>
    </div>
  );
}

export default RateComponent;
