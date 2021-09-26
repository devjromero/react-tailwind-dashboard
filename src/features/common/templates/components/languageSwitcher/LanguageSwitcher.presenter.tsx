import {FC, PropsWithChildren} from "react";
import {Popover} from "@headlessui/react";
import LanguageType from "../../../types/Language.type";

interface Props {
    languages: LanguageType[],
    selectedLanguage: LanguageType,
    handleChange: any
}

const LanguageSwitcherPresenter:FC<Props> = (props:PropsWithChildren<Props>) => {
    const { languages, selectedLanguage, handleChange } = props;
    return (
        <Popover className="relative">
            <Popover.Button>{selectedLanguage.name}</Popover.Button>
            <Popover.Panel className="absolute z-10">
                <div className="flex flex-col">
                    {
                        languages.map((lang: LanguageType)=>(
                            <span onClick={(e)=>handleChange(lang)}>
                                <img src={lang.Component} alt=""/>
                                {lang.name}
                            </span>
                        ))
                    }
                </div>

            </Popover.Panel>
        </Popover>
    );
}
export default LanguageSwitcherPresenter;