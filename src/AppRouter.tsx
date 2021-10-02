import React, {FC, Suspense, useEffect, useState} from "react";
import store from "./features/common/redux/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardLayout from "./features/common/templates/layouts/dashboard/DashboardLayout";
import Login from "./features/guest/templates/login/Login";
import {DefaultRootState, Provider, useDispatch, useSelector} from "react-redux";

const AppRouter:FC<any> = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state:any)=>state?.auth);
    const [isAuthenticate, setAuthenticate] = useState(true);
    useEffect(() => {
        dispatch({type:'authenticateUser'})
        // console.log(auth)
    }, []);

    return(
        <BrowserRouter>
            <Suspense fallback={<h1>Cargando...</h1>}>
                <div className={'h-screen w-screen font-montserrat bg-white'}>
                    <Switch>
                        {
                            auth.name
                                ?(
                                    <>
                                        <Route exact path={'/'} component={DashboardLayout}/>
                                        <Route exact path={'*'}>
                                            <h1>No hay nada usuario</h1>
                                        </Route>
                                    </>
                                )
                                :
                                <>
                                    <Route exact path={'/'}>
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
export default AppRouter;