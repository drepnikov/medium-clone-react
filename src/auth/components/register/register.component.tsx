import * as React from "react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";
import { authService } from "src/auth/services/auth.service";
import { BackendErrors } from "src/shared/components/backendErrors/backendErrors.component";

interface IRegisterProps {}

const Register: React.FC<IRegisterProps> = () => {
  const [errors, setErrors] = useState<BackendErrorsInterface | null>(null);

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const setName: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormFields((prev) => ({ ...prev, username: e.target.value }));
  const setEmail: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormFields((prev) => ({ ...prev, email: e.target.value }));
  const setPassword: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormFields((prev) => ({ ...prev, password: e.target.value }));

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { result, error } = await authService.register({ user: formFields });

    if (error && error.msg) {
      setErrors(error.msg);
    } else {
      console.log("Успешно");
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a>Have an account?</a>
            </p>

            {errors && <BackendErrors errors={errors} />}

            <form onSubmit={onSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={setName}
                    value={formFields.username}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={setEmail}
                    value={formFields.email}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={setPassword}
                    value={formFields.password}
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
