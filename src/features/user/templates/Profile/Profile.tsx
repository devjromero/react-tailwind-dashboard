import {FC} from "react";
import ProfileImga from './../../../../assets/profile.jpeg';
import Banner from './../../../../assets/banner.jpg';
import {AiOutlineUser, FaUser, IoDocument} from "react-icons/all";
const Profile:FC<any> = () => {
    return (
        <div className={'grid grid-cols-4'}>
            <div className={'w-1/4 cols-span-1 bg-white'}>
                hOLA MUNDO
            </div>
            <div className={'rounded grid grid-cols-2 grid-rows-2 gap-2 h-screen cols-span-3'}>
                <div className={'flex flex-col rounded col-span-2 bg-red-400 h-full'}>
                    <div className="rounded overflow-hidden bg-blue-500 h-3/4">
                        <img src={Banner} alt="" className={'w-full h-full'}/>
                    </div>
                    <img src={ProfileImga} alt="" className={'rounded w-28 ml-4 -mt-10'}/>
                    <div className={'ml-32 bg-blue-400 flex justify-start'}>
                        <div className={'flex justify-between items-center'}>
                            <AiOutlineUser />
                            &nbsp;
                            <p className={'hidden lg:block'}>Información</p>
                        </div>
                        <div className={'flex justify-between items-center pl-4'}>
                            <IoDocument />
                            &nbsp;
                            <p className={'hidden lg:block'}>Documentación</p>
                        </div>
                    </div>
                </div>
                <div className={'col-span-2'}>
                    col 2
                </div>
            </div>
        </div>
    );
}
export default Profile;