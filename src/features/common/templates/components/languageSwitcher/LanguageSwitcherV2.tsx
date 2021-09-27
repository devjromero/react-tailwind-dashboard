import {FC, useState} from "react";
import useTranslation from "../../../utilities/hooks/useTranslation";
import mexFlag from './../../../../../assets/flags/mex2.jpg';
import LanguageType from "../../../types/Language.type";
import LanguageSwitcherPresenter from "./LanguageSwitcher.presenter";
import usaS from '../../../../../assets/flags/usa3.jpg';


const languages:LanguageType[] = [
    { id: 'en', name: 'English', Component: usaS},
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