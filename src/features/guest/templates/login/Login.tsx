import {FC} from "react";
import {Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import LoginPresenter from "./Login.presenter";

export interface FormInputs {
    email: string,
    password: string,
}

const initialValues: FormInputs = {
    email: '',
    password: '',
}

const Login:FC<any> = () => {

    const validate = (values:FormInputs) => ({});
    const handleSubmit = (values:FormInputs, actions:FormikHelpers<FormInputs>)=> {
        console.log(values, actions);
    };

    return (
        <Formik
            initialValues   = {initialValues}
            validate        = {validate}
            onSubmit        = {handleSubmit}
        >
            { FormikRender }
        </Formik>
    );
}

export type FormikProperties = FormikProps<FormikValues>;
const FormikRender = (formikProps: FormikProperties) => (
    <LoginPresenter
        {...formikProps }
    />
);
export {
    Login,

};