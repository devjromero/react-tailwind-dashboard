import React, {useState, Suspense} from 'react';
import Index from "./features/common/templates/layouts/components/BaseLayout";
import Login from "./features/guest/templates/Login";
import i18n from './features/common/utilities/translator/i18n';

function App() {
    const [isAuthenticate, setAuthenticate] = useState(false);
    console.log(i18n.language);
    return (
        <Suspense fallback={<h1>Cargando...</h1>}>
            <div className={'h-screen w-screen font-montserrat'}>

                { isAuthenticate && (<Index/>)}
                { !isAuthenticate && (<Login/>)}
                {/*<h2>{i18n.t('welcome')}</h2>*/}


            </div>
        </Suspense>

  );
}

export default App;