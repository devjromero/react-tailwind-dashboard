import React, {useState, Suspense} from 'react';

import i18n from './features/common/utilities/translator/i18n';
import Login from "./features/guest/templates/login/Login";
import DashboardLayout from "./features/common/templates/layouts/dashboard/DashboardLayout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
    const [isAuthenticate, setAuthenticate] = useState(true);
    console.log(i18n.language);
    return (

        <BrowserRouter>
            {/*{ isAuthenticate && (<DashboardLayout />)}*/}
            {/*{ !isAuthenticate && (<Login/>)}*/}
            <Suspense fallback={<h1>Cargando...</h1>}>
                <div className={'h-screen w-screen font-montserrat bg-white'}>
                    <Switch>
                        {
                            isAuthenticate
                                ?(
                                    <>
                                        <Route exact path={'/dashboard'} component={DashboardLayout}/>
                                        <Route exact path={'*'}>
                                            <h1>No hay nada usuario</h1>
                                        </Route>
                                    </>
                                )
                                :
                                <>
                                    <Route exact path={'/login'}>
                                        <Login/>
                                    </Route>
                                    <Route exact path={'*'}>
                                        <h1>No hay nada aqui invitado</h1>
                                    </Route>
                                </>
                        }



                    </Switch>
                </div>
            </Suspense>


        </BrowserRouter>


  );
}

export default App;
