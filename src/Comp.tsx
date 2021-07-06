// A simple component that will be exported from the package
import React, { FC } from "react";

interface Props {
  message: string;
}

const Comp: FC<Props> = ({ message }) => {
  return (
    <>
      <p>The official message is: {message}</p>
    </>
  );
};

export default Comp;

