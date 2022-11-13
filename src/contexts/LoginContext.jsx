import { createContext, useState } from "react";

export const LoginContext = createContext()

const LoginContextProvider = (props) => {

    let storedData = {loginState: false, token: ""};
    if(localStorage.getItem('drEman')){
        storedData = JSON.parse(localStorage.getItem('drEman'))
    }

    const [ loginState, setLoginState ] = useState(storedData.loginState)
    const [ token, setToken ] = useState(storedData.token)
    console.log(storedData)
    const handleLogin = (s, t) => {
        setLoginState(s)
        setToken(t)
    }
    localStorage.setItem('drEman', JSON.stringify({loginState, token}))


    return(
        <LoginContext.Provider value={{loginState, token, handleLogin}}>{props.children}</LoginContext.Provider>
    )
}

export default LoginContextProvider