import React from "react";

type ErrorMessageProperties = { message: string };

const ErrorMessage = ({ message }: ErrorMessageProperties): JSX.Element => (
  <p role="alert">{message}</p>
);

export default ErrorMessage;
