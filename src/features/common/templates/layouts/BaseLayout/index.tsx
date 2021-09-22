import {FC} from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";

const Index:FC<any> = () => {
    const toggleSidebar = () => {
        const sidebar = document.querySelector("#sidebar");
        sidebar?.classList.toggle("-translate-x-full");
    }
    return(
        <div className="relative min-h-screen md:flex bg-gray-100">

            {/* START LeftSidebar*/}
            <LeftSidebar toggleSidebar={toggleSidebar}/>
            {/* END LeftSidebar*/}


            {/* Content*/}
            <div className="flex-1 p-4">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className={''}>
                    content goes here
                    <button onClick={toggleSidebar}>Toggle</button>
                </div>
            </div>

        </div>
    );
}
export default Index;