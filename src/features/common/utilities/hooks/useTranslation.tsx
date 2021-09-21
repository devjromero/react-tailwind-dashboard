import {useTranslation as useTranslationI18n} from "react-i18next";
type useTranslationType = {
    t: any,
    translatorConfig: any
}
const useTranslation = ():useTranslationType => {
    const {t, i18n} = useTranslationI18n();
    return {
        t,
        translatorConfig: i18n
    }
}
export default useTranslation;