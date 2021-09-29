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
        <Popover className="relative ">
            <Popover.Button className={'flex items-center justify-between'}>
                <img src={selectedLanguage.Component} alt="image" className={'w-5'}/>
                &nbsp;
                <p className={'hidden md:block text-sm'}>{selectedLanguage.name}</p>
            </Popover.Button>
            <Popover.Panel className="absolute z-10">
                <div className="flex flex-col ">
                    {
                        languages.map((lang: LanguageType)=>(
                            <div
                                className={'flex items-center mb-2'}
                                onClick={(e)=>handleChange(lang)}
                                key={`lagn-${lang.id}`}
                            >
                                <img src={lang.Component} alt="" className={'w-7'}/>
                                {lang.name}
                            </div>
                        ))
                    }
                </div>

            </Popover.Panel>
        </Popover>
    );
}
export default LanguageSwitcherPresenter;