import React from 'react'

const authContext = React.createContext({
    authorized: false,
    sid: 0,
    account: '',
    token: '',
});

export default authContext;



