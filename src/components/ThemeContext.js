import React from 'react'

export const themes = {
    dark:{
        name: 'dark',
        bgc: 'black',
        fc: 'white',
    },
    light:{
        name: 'light',
        bgc: 'white',
        fc: 'black',
    },
    blue:{
        name: 'blue',
        bgc: 'blue',
        fc: 'yellow',
    },
};

const themeContext = React.createContext(themes.dark);

export default themeContext;



