import {FC, Fragment, PropsWithChildren, useState} from "react";
import Logo from "../../../assets/profile.jpeg";
import InputGroup from "../../common/templates/components/forms/InputGroup";
import InputText from "../../common/templates/components/forms/InputText";
import Button from "../../common/templates/components/forms/Button";
import InputPassword from "../../common/templates/components/forms/InputPassword";
import LanguageSwitcher from "../../common/templates/components/languageSwitcher/LanguageSwitcher";
import OnlineEducationSVG from './../../../assets/login/online_education.svg';
import ComputerBackground from './../../../assets/login/login.png';


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
        <div className= {'h-screen w-screen flex flex-col xl:flex-row'}>
            <div className={'bg-blue-100 hidden xl:flex w-2/3 xpx-2'}>
                {/*<img src={OnlineEducationSVG} alt="" className={'w-full'}/>*/}
                <img src={ComputerBackground} alt="" className={'w-full'}/>
            </div>
            <div className={'absolute z-10 w-full flex justify-end'}>
                <LanguageSwitcher />
            </div>
            <div className={'relative z-1 h-screen w-full sm:w1/2 flex flex-col p-4 justify-center gap-3 xl:w-1/3'}>
                <div className={'w-full flex flex-col items-center mb-5 gap-2'}>
                    <img className ={'rounded-full w-3/12 self-center'} src ={Logo} alt = "Logo jromero"/>
                    <h1 className={' text-xl self-center'}>Inicio de sesión</h1>
                </div>
                <div className={'w-full'}>
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
            </div>
        </div>
    );
}
export default LoginPresenter;