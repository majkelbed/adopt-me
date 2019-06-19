import React from "react";
export default function Pet(props) {
  //({name,animal,sex}) destructuring
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h2", {}, props.animal),
  //     React.createElement("h2", {}, props.sex)
  //]);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.sex}</h2>
    </div>
  );
}
