import React, { useState } from 'react';

const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [loading,setloading]=useState(true);

    const noLoading=()=>{
        return setloading(false);
    }
    
    return(<AppContext.Provider value={{loading,noLoading}}>
    {children}
    </AppContext.Provider>
    )
}
export {AppContext,AppProvider};