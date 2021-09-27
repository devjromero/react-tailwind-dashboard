import React, {useState, Suspense} from 'react';
import Index from "./features/common/templates/layouts/BaseLayout";

import i18n from './features/common/utilities/translator/i18n';
import {Login} from "./features/guest/templates/login/Login";
import LoginLegacy from "./features/guest/templates/Login";
import DefaultLayout from "./features/common/templates/layouts/DefaultLayout/DefaultLayout";
import TestLayout from "./features/common/templates/layouts/TestLayout";
function App() {
    const [isAuthenticate, setAuthenticate] = useState(true);
    console.log(i18n.language);
    return (
        <Suspense fallback={<h1>Cargando...</h1>}>
            <div className={'h-screen w-screen font-montserrat'}>

                {/*{ isAuthenticate && (<Index/>)}*/}
                { isAuthenticate && (<DefaultLayout/>)}
                {/*{ isAuthenticate && (<TestLayout/>)}*/}
                {/*{ !isAuthenticate && (<LoginLegacy/>)}*/}
                { !isAuthenticate && (<Login/>)}
                {/*<h2>{i18n.t('welcome')}</h2>*/}


            </div>
        </Suspense>

  );
}

export default App;
