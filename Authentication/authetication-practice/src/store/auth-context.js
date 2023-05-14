import React, { useCallback, useEffect, useState } from "react"
const TokenKey='token';
const ExpiresKey='expires';
let logoutTimeout;
const getExpireDuration=(expirationTime)=>{
    const currentTime=new Date().getTime();
    return expirationTime-currentTime;
}
const getSavedToken=()=>{
    const savedToken=localStorage.getItem(TokenKey);
    const savedExpiration=localStorage.getItem(ExpiresKey);
    const duration=getExpireDuration(savedExpiration);
    if(duration<=0){
        localStorage.removeItem(TokenKey);
        localStorage.removeItem(ExpiresKey);
        return null;
    }
    return {token:savedToken,expireDate:savedExpiration}
}
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token,expires)=>{},
    logout:()=>{}
})
export const AuthContextProvider=props=>{
    // const savedToken=localStorage.getItem(TokenKey);
    const savedItems=getSavedToken();
    let initialToken;
    if(savedItems){
        initialToken=savedItems.token;
    }
    const [token,setToken]=useState(initialToken);
    const userIsLoggedIn=!!token;


    const loginHandler=(token,expires)=>{
        setToken(token);
        localStorage.setItem(TokenKey,token);
        const expiresInMilliseconds=expires*1000;
        const expireDate=new Date( new Date().getTime()+expiresInMilliseconds).getTime();
        localStorage.setItem(ExpiresKey,expireDate.toString());
       logoutTimeout= setTimeout(() => {
            logoutHandler();
        }, expiresInMilliseconds);
    }
    const logoutHandler=useCallback( ()=>{
        setToken(null);
        localStorage.removeItem(TokenKey);
        localStorage.removeItem(ExpiresKey);
        clearTimeout(logoutTimeout)
    },[])

    useEffect(()=>{
        if(savedItems){
            logoutTimeout=setTimeout(logoutHandler, getExpireDuration(savedItems.expireDate            ));
        }
    },[logoutHandler])
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;