import React, { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
    // 先查看 localStorage 的資料是否表示已登入
    const localAuthStr = localStorage.getItem("auth");
    let localAuth = {
        authorized: false,
        sid: 0,
        account: "",
        token: "",
    };
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
            }
        } catch (ex) {}
    }
    const [auth, setAuth] = useState(localAuth);

    return (
        <AuthContext.Provider value={{ ...auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
