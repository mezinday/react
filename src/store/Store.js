import React, {createContext, useState} from 'react';

export const Context = createContext();

const Store = ({children}) => {
    const [paper, setPaper] = useState(0);
    const [name, setName] = useState("");
    const [emoji, setEmoji] = useState(0);
    
    return (
        <Context.Provider value={{ 
            paper, setPaper, 
            name, setName, 
            emoji, setEmoji 
            }}>
            {children}
        </Context.Provider>
    );
}
export default Store;