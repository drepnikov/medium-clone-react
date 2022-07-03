import * as React from "react";

interface IErrorMessageComponentProps {
  message?: string;
}

const ErrorMessageComponent: React.FC<IErrorMessageComponentProps> = ({
  message = "Something went wrong",
}) => {
  return <div>{message}</div>;
};

export { ErrorMessageComponent };
