import {FC} from "react";
import Logo from './../../../assets/profile.jpeg';
import useTranslation from "../../common/utilities/hooks/useTranslation";
import InputText from "../../common/templates/layouts/components/forms/InputText";
import InputGroup from "../../common/templates/layouts/components/forms/InputGroup";
import Button from "../../common/templates/layouts/components/forms/Button";
const Login:FC<any> = () => {
    const { t, translatorConfig } = useTranslation();
    // translatorConfig.changeLanguage('en');
    return (
    <div className={'h-screen flex flex-col p-4 justify-center gap-2'}>
        <div className={'w-full flex flex-col items-center mb-5 gap-2'}>
            <img
                className   = {'rounded-full w-3/12 self-center'}
                src         = {Logo}
                alt         = "Logo jromero"
            />
            <h1 className={' text-xl self-center'}>Inicio de sesión</h1>
        </div>
        <form action="" className={'flex flex-col w-full gap-3'}>
            {/*{t('welcome')}*/}
            <InputGroup
                label   = {'Correo electrónico'}
                feedback= {'Some feedback bro!!!'}
                error   = {'Ups :s'}
            >
                <InputText
                    placeholder={'Correo electrónico'}
                />
            </InputGroup>

            <InputGroup
                label   = {'Contraseña'}
                feedback= {'Some feedback bro!!!'}
                error   = {'Ups :s'}
            >
                <InputText
                    placeholder={'Contraseña'}
                />
            </InputGroup>
            <Button>
                Iniciar sesión
            </Button>
        </form>
        <span> ¿Eres nuevo? crea una cuenta <b>aquí</b></span>
    </div>
    );
}

export default Login;