import React, {useState, Suspense} from 'react';

import i18n from './features/common/utilities/translator/i18n';
import {Login} from "./features/guest/templates/login/Login";
import DashboardLayout from "./features/common/templates/layouts/Dashboard/DashboardLayout";
function App() {
    const [isAuthenticate, setAuthenticate] = useState(true);
    console.log(i18n.language);
    return (
        <Suspense fallback={<h1>Cargando...</h1>}>
            <div className={'h-screen w-screen font-montserrat'}>

                { isAuthenticate && (<DashboardLayout />)}
                { !isAuthenticate && (<Login/>)}

            </div>
        </Suspense>

  );
}

export default App;
