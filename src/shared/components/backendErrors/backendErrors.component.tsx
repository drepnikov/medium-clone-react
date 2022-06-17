import * as React from "react";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

interface IBackendErrorsProps {
  errors: BackendErrorsInterface;
}

const BackendErrors: React.FC<IBackendErrorsProps> = ({ errors }) => {
  return (
    <ul className="error-messages">
      {Object.keys(errors).map((name) => {
        const messages = errors[name].join(", ");

        return <li key={name}>{`${name} ${messages}`}</li>;
      })}
    </ul>
  );
};

export { BackendErrors };
