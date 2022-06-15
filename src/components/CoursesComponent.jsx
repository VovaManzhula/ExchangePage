import React from "react";
import RateComponent from "./RateComponent";

function CoursesComponent({data}) {


  return (
    <div className="RateComponent">
     {data.map((post) => (
        <RateComponent post={post} key={post.txt} />
      ))} 
    </div>
  );
}

export default CoursesComponent;
