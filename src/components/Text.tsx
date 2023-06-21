import React, { useContext } from "react";
import { User, UserContext } from "../contexts/Contexts";

interface IText {
  text?: string;
}

function Text(props: IText) {
  const { text } = props;

  const { fullName, setFullName } = useContext(UserContext) as User;

  return <p>{fullName}</p>;
}

export default Text;
