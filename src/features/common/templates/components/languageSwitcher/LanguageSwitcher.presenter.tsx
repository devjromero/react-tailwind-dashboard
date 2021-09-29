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
        <Popover className="relative w-auto">
            <Popover.Button className={'flex items-center justify-between'}>
                <img src={selectedLanguage.Component} alt="image" className={'w-5'}/>
                &nbsp;
                <p className={'hidden md:block text-sm'}>{selectedLanguage.name}</p>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 bg-white w-auto rounded">
                <div className="flex flex-col w-full cursor-pointer">
                    <div className={'w-24 p-2 flex flex-col items-center justify-between'}>
                        {
                            languages.map((lang: LanguageType)=>(
                                <div
                                    className={'w-full flex justify-between items-center mb-2 rounded-full'}
                                    onClick={(e)=>handleChange(lang)}
                                    key={`lang-${lang.id}`}
                                >
                                    <img src={lang.Component} alt="" className={'w-5'}/>
                                    <p className={'text-sm'}>{lang.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Popover.Panel>
        </Popover>
    );
}
export default LanguageSwitcherPresenter;