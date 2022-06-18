import * as React from "react";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { Link } from "react-router-dom";

import { BackendErrors } from "src/shared/components/backendErrors/backendErrors.component";
import { useAppDispatch } from "src/shared/store/hooks/store.hook";
import {
  useIsSubmittingSelector,
  useValidationErrorsSelector,
} from "src/auth/store/selectors";
import { registerThunk } from "src/auth/store/thunks/register.thunk";
import { clearBackendErrors } from "src/auth/store/reducer";

interface IRegisterProps {}

const Register: React.FC<IRegisterProps> = () => {
  const validationErrors = useValidationErrorsSelector();
  const isSubmitting = useIsSubmittingSelector();
  const dispatch = useAppDispatch();

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

  const dispatchClearBackendErrors = useCallback(() => {
    if (validationErrors) dispatch(clearBackendErrors());
  }, [dispatch, validationErrors]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(registerThunk({ user: formFields }));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link onClick={dispatchClearBackendErrors} to={"/auth/login"}>
                Have an account?
              </Link>
            </p>

            {validationErrors && <BackendErrors errors={validationErrors} />}

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
                  disabled={isSubmitting}
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
