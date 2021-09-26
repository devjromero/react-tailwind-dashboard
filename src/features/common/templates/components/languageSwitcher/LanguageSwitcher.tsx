import {FC, Fragment, useState} from "react";
import {Listbox} from "@headlessui/react";
import usaFlag from './../../../../../assets/flags/usa.svg';
import mexFlag from './../../../../../assets/flags/mexico.svg';
import useTranslation from "../../../utilities/hooks/useTranslation";
interface Language {
    id: string,
    name: string,
    Component: any
}
const languages:Language[] = [
    { id: 'en', name: 'English', Component: usaFlag },
    { id: 'es', name: 'Español', Component: mexFlag  },
];

const LanguageSwitcher:FC<any> = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const { translatorConfig } = useTranslation();
    const handleChange = (selectedLang:Language) => {
        setSelectedLanguage(selectedLang);
        translatorConfig.changeLanguage(selectedLang.id);
    }
    return (
        <div className={'w-3/12 sm:w-2/12 flex justify-end mr-4 mt-4'}>
            <Listbox value={selectedLanguage} onChange={handleChange} as={'div'} className={'w-auto text-xs justify-center  gap-2'}>
                <Listbox.Button as={'div'} className={'w-full flex justify-around items-center px-1 py-1'}>
                    <img src={selectedLanguage.Component} alt="flag" className={'w-3 sm:w-6'}/>
                    &nbsp;
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl'}>{selectedLanguage.name}</p>
                </Listbox.Button>
                <Listbox.Options className={'w-full flex flex-col items-end justify-around px-1 py-1'} as={'div'}>
                    {languages.map((person) => (

                        <Listbox.Option key={person.id} value={person} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={`${
                                        active ? 'text-blue-500' : 'text-black'
                                    } w-full flex justify-between px-1 py-1`}
                                >
                                    <img src={person.Component} alt="flag" className={'w-3 sm:w-6'}/>
                                    &nbsp;
                                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl'}>{person.name}</p>
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
}
export default LanguageSwitcher;