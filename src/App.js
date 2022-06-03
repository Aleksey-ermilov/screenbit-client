import React, {useEffect,useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";

import AppRouter from "./components/AppRouter";
import Loading from "./pages/Loading";

import { registrationUser, check } from "./http/userAPI";

import {setUser, setAuth, fetchFavorites, fetchCart, selectedAddressAction} from "./store/user/actionUser";

function App() {
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect( () => {
        const u = JSON.parse(localStorage.getItem('user'))
        if (!u){
            registrationUser().then( data => {
                dispatch(setUser(data.user))
            }).finally(() => setLoading(false))
        }else{
            if (u.user_id.includes('auth')){
                check(u.user_id).then( data => {
                    localStorage.setItem('user',JSON.stringify(data.user))
                    dispatch(setUser(data.user))
                    dispatch( selectedAddressAction(data.user.addresses.length ? data.user.addresses[0] : null) )
                    dispatch(fetchFavorites(data.user.favorites ? data.user.favorites : []))
                    dispatch(fetchCart(data.user.cart ? data.user.cart : []))
                    dispatch(setAuth(true))
                }).catch( () =>{  // может инициировать авторизацию?!
                    registrationUser().then( data => {
                        dispatch(setUser(data.user))
                    })
                    }
                ).finally(() => setLoading(false))
            }else {
                dispatch(setUser(u))
                setLoading(false)
            }
        }
    },[])

    if (loading){
        return <Loading />
    }

      return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
