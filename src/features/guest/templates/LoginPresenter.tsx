import {FC, PropsWithChildren} from "react";
import Logo from "../../../assets/profile.jpeg";
import InputGroup from "../../common/templates/components/forms/InputGroup";
import InputText from "../../common/templates/components/forms/InputText";
import Button from "../../common/templates/components/forms/Button";
import InputPassword from "../../common/templates/components/forms/InputPassword";
import usaFlag from './../../../assets/flags/usa.svg';
import mexFlag from './../../../assets/flags/mexico.svg';

interface IFormInputs {
    email: string,
    password: string,
}

interface Props {
    values:IFormInputs,
    handleChange: any,
    handleSubmit: any,
    errors: any,
    touched: any,

}

const LoginPresenter:FC<Props> = (props:PropsWithChildren<Props>) =>{
    return (
        <>
            <div className={'absolute top-0 right-0 flex items-center gap-1 px-3 py-3 animate-pulse '}>
                <img src={usaFlag} alt="lang" className={'w-3'}/>
                <p className={'text-xs tex-gray-400'}>English</p>
            </div>
            <div className={'relative h-screen flex flex-col p-4 justify-center gap-3'}>
                <div className={'w-full flex flex-col items-center mb-5 gap-2'}>
                    <img className ={'rounded-full w-3/12 self-center'} src ={Logo} alt = "Logo jromero"/>
                    <h1 className={' text-xl self-center'}>Inicio de sesión</h1>
                </div>
                <form action="" className={'flex flex-col w-full gap-3'} onSubmit={props.handleSubmit}>
                    <InputGroup
                        label       = {'Correo electrónico'}
                        feedback    = {'example@email.com'}
                        errors      = {props.errors.email }
                    >
                        <InputText
                            placeholder = {'Correo electrónico'}
                            onChange    = {props.handleChange}
                            value       = {props.values.email}
                            name        = {'email'}
                            // thereIsAnError={true}
                        />
                    </InputGroup>
                    <InputGroup
                        label       = {'Contraseña'}
                        feedback    = {'Escribe tu contraseña super secreta'}
                        // errors   = {'Ups :s'}
                    >
                        <InputPassword
                            placeholder = {'******'}
                            onChange    = {props.handleChange}
                            value       = {props.values.password}
                            name = {'password'}
                            // thereIsAnError={true}
                        />
                    </InputGroup>
                    <div className={'w-full mt-4'}>
                        <Button>Iniciar sesión</Button>
                    </div>
                </form>
                <p className={'text-gray-600 '}>
                    ¿Eres nuevo? crea una cuenta
                    <span className={'italic text-blue-400'}> aquí</span>
                </p>
            </div>
        </>
    );
}
export default LoginPresenter;