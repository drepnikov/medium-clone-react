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
} from "src/features/auth/store/selectors";
import { loginThunk } from "src/features/auth/store/thunks/login.thunk";
import { clearBackendErrors } from "src/features/auth/store/reducer";
import { AuthFeature } from "src/features/auth/auth.feature";

interface IRegisterProps {}

const Login: React.FC<IRegisterProps> = () => {
  const dispatch = useAppDispatch();
  const validationErrors = useValidationErrorsSelector();
  const isSubmitting = useIsSubmittingSelector();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const setEmail: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormFields((prev) => ({ ...prev, email: e.target.value }));
  const setPassword: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormFields((prev) => ({ ...prev, password: e.target.value }));
  const dispatchClearBackendErrors = useCallback(() => {
    if (validationErrors) dispatch(clearBackendErrors());
  }, [dispatch, validationErrors]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(loginThunk({ user: formFields }));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link
                onClick={dispatchClearBackendErrors}
                to={AuthFeature.PATHS.register}
              >
                Need an account?
              </Link>
            </p>

            {validationErrors && <BackendErrors errors={validationErrors} />}

            <form onSubmit={onSubmit}>
              <fieldset>
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

export { Login };
