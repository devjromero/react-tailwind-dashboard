import {FC, Fragment, useState} from "react";
import {Listbox} from "@headlessui/react";
import usaFlag from './../../../../../assets/flags/usa.svg';
import mexFlag from './../../../../../assets/flags/mexico.svg';
const people = [
    { id: 'en', name: 'English', Component: usaFlag },
    { id: 'es', name: 'Español', Component: mexFlag  },
];

const LanguageSwitcher:FC<any> = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    return (
        <div className={'w-3/12 sm:w-2/12 flex justify-end mr-4 mt-4'}>
            <Listbox value={selectedPerson} onChange={setSelectedPerson} as={'div'} className={'w-auto text-xs justify-center  gap-2'}>
                <Listbox.Button as={'div'} className={'w-full flex justify-around items-center px-1 py-1'}>
                    <img src={selectedPerson.Component} alt="flag" className={'w-3 sm:w-6'}/>
                    &nbsp;
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl'}>{selectedPerson.name}</p>
                </Listbox.Button>
                <Listbox.Options className={'w-full flex flex-col items-end justify-around px-1 py-1'} as={'div'}>
                    {people.map((person) => (

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