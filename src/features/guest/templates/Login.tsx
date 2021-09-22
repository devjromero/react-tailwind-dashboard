import {FC} from "react";
import useTranslation from "../../common/utilities/hooks/useTranslation";import LoginPresenter from "./LoginPresenter";
import {Formik, FormikValues} from "formik";

interface IFormInputs {
    email: string,
    password: string,
}

const initValues:IFormInputs = {
    email: '',
    password: '',
}
const Login:FC<any> = () => {
    // const { t, translatorConfig } = useTranslation();
    const validate = (values: IFormInputs) => {
        const errors:any = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        console.log(errors)
        return errors;
    }

    const handleSubmitt = (values: FormikValues, s:any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            s.setSubmitting(false);
        }, 400);
    }

    return (
        <Formik
            initialValues   = {initValues}
            validate        = {validate}
            onSubmit        = {handleSubmitt}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                  <LoginPresenter
                      values={values}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      errors={errors}
                      touched={touched}
                  />
                // <form onSubmit={handleSubmit}>
                //     <input
                //         type="text"
                //         name="email"
                //         onChange={handleChange}
                //         value={values.email}
                //     />
                //     {errors.email && touched.email && errors.email}
                //     <input
                //         type="password"
                //         name="password"
                //         onChange={handleChange}
                //         value={values.password}
                //     />
                //     {errors.password && touched.password && errors.password}
                //     <button type="submit" disabled={isSubmitting}>
                //         Submit
                //     </button>
                // </form>
            )}
        </Formik>
    );
}

export default Login;