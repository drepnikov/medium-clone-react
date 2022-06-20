import * as React from "react";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

interface IBackendErrorsComponentProps {
  errors: BackendErrorsInterface;
}

const BackendErrorsComponent: React.FC<IBackendErrorsComponentProps> = ({
  errors,
}) => {
  return (
    <ul className="error-messages">
      {Object.keys(errors).map((name) => {
        const messages = errors[name].join(", ");

        return <li key={name}>{`${name} ${messages}`}</li>;
      })}
    </ul>
  );
};

export { BackendErrorsComponent };
