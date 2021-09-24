import {FC, PropsWithChildren} from "react";
import BackgroundImage from './../../../../assets/login/login.png';
import LanguageSwitcher from "../../../common/templates/components/languageSwitcher/LanguageSwitcher";
import Logo from './../../../../assets/profile.jpeg';
import InputGroup from "../../../common/templates/components/forms/InputGroup";
import InputText from "../../../common/templates/components/forms/InputText";
import {FormInputs} from "./Login";
import {FormikValues} from "formik";
import Button from "../../../common/templates/components/forms/Button";
import InputPassword from "../../../common/templates/components/forms/InputPassword";

interface Props {
    values:         FormInputs | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
}

const LoginPresenter:FC<Props> = (props: PropsWithChildren<Props>) => {
    console.log( props.values);
    return (
        <div className={'h-screen w-screen flex flex-col xl:flex-row'}>
            <ImageBackground />
            <LanguageSwitcherComponent/>
            <FormLayout {...props}/>
        </div>

    );
}



const FormLayout:FC<Props> = (props: PropsWithChildren<Props>) => {
    const { handleChange, values } = props;
    return (
        <div className={'relative z-1 h-screen w-full flex flex-col p-4 justify-center gap-3 lg:w-1/3'}>
            <div className={'relative z-1 w-full flex flex-col items-center  gap-3'}>
                <img src={Logo} alt={'Logo jromero'} className={'rounded-full w-3/12'}/>
                <h1 className={'text-md'}>Inicio de sesión</h1>
            </div>
            <form action="" className={'w-full flex flex-col gap-3'}>
                <InputGroup label={'Email'} feedback={'example@gmail.com'} >
                    <InputText onChange={handleChange} value={values.email} name={'email'} placeholder={'example@gmail.com'}/>
                </InputGroup>
                <InputGroup label={'Password'} callActionLabel={'¿Olvidaste tu contraseña?'}>
                    <InputPassword onChange={handleChange} value={values.password} name={'password'} placeholder={'******'}/>
                </InputGroup>
                <Button className={'mt-4 bg-red-400'}>Iniciar sesión</Button>
            </form>
            <p className={'text-gray-600'}>
                ¿Nuevo en la plataforma? crea una cuenta <span className={'italic text-blue-400'}>aquí</span>
            </p>
        </div>
    );
}

const LanguageSwitcherComponent:FC<any> = () => {
    return (
        <div className={'absolute z-10 w-full flex justify-end'}>
            <LanguageSwitcher />
        </div>
    );
}

const ImageBackground:FC<any> = () => {
    return (
        <div className={'hidden z-1 bg-cover h-full w-2/3 lg:relative lg:flex'}>
            <img
                src       = {BackgroundImage}
                alt       = {'Background Image'}
                className = {'w-full h-full'}
            />
        </div>
    );
}



export default LoginPresenter;