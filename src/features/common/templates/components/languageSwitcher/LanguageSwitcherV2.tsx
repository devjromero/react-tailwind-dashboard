import {FC, useState} from "react";
import useTranslation from "../../../utilities/hooks/useTranslation";
import usaFlag from './../../../../../assets/flags/usa.svg';
import mexFlag from './../../../../../assets/flags/mexico.svg';
import LanguageType from "../../../types/Language.type";
import LanguageSwitcherPresenter from "./LanguageSwitcher.presenter";


const languages:LanguageType[] = [
    { id: 'en', name: 'English', Component: usaFlag},
    { id: 'es', name: 'Español', Component: mexFlag},
]

const LanguageSwitcher:FC<any> = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const { translatorConfig } = useTranslation();
    const handleChange = (lang: LanguageType) => {
        setSelectedLanguage(lang);
        translatorConfig.changeLanguage(lang.id);
    }
    return (
        <LanguageSwitcherPresenter
            languages={languages}
            selectedLanguage={selectedLanguage}
            handleChange={handleChange}
        />
    );
}
export default LanguageSwitcher;