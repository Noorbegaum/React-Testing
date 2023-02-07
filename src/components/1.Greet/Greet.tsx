import React from "react";
import { GreetProps } from "./greet.types";

export default function Greet( props: GreetProps ) {
  return <div>Hello {props.name}</div>;
}
