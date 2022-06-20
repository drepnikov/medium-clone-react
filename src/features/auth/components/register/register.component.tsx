import * as React from "react";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { Link } from "react-router-dom";

import { BackendErrorsComponent } from "src/shared/components/backendErrors/backendErrors.component";
import { useAppDispatch } from "src/shared/store/hooks/store.hook";
import {
  useIsSubmittingSelector,
  useValidationErrorsSelector,
} from "src/features/auth/store/selectors";
import { registerThunk } from "src/features/auth/store/thunks/register.thunk";
import { clearBackendErrors } from "src/features/auth/store/reducer";
import { AuthFeature } from "src/features/auth/auth.feature";

interface IRegisterComponentProps {}

const RegisterComponent: React.FC<IRegisterComponentProps> = () => {
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
              <Link
                onClick={dispatchClearBackendErrors}
                to={AuthFeature.PATHS.login}
              >
                Have an account?
              </Link>
            </p>

            {validationErrors && (
              <BackendErrorsComponent errors={validationErrors} />
            )}

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

export { RegisterComponent };
