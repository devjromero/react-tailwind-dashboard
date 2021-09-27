import {FC, useState} from "react";
import classNames from "classnames";

const TestLayout:FC<any> = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
    <div className={'w-full h-auto bg-gray-100 flex'}>
        {/*left navbar*/}
        {/*large*/}
        <div className={classNames({
            absolute: isOpen,
            relative: !isOpen,
        }) +
        'h-screen shadow-xl ' +
        'w-4/6 lg:w-1/3 p-4 z-10 lg:z-1'
        }>
            <div className={'bg-white border'}>
                <span
                    onClick={(e)=>setIsOpen(!isOpen)}
                >
                    Jromero
                </span>
            </div>
            <div className={classNames({
                hidden: !isOpen,
                block: !isOpen,
            }) +
            'bg-white border h-screen'}>
                <ul>
                    <li>1 <span className={classNames({
                        hidden: !isOpen
                    })}>Menu uno</span></li>
                    <li>2 <span>Menu dos</span></li>
                </ul>
            </div>
        </div>
        {/*end navbar  filter blur-sm*/}
        <div className={'z-1 w-auto'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta distinctio,
            exercitationem explicabo fuga ipsa mollitia nisi pariatur, possimus quod reiciendis rem sunt tempore.
            Atque distinctio est provident reiciendis ut.
        </div>
    </div>
    );
}
export default TestLayout;