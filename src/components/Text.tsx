import React, { useContext } from "react";

interface IText {
  text: string;
}

function Text(props: IText) {
  const { text } = props;

  return <p>{text}</p>;
}

export default Text;
