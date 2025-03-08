import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+12334934190"
    const name = "John Doe"
    return(
        // <AppContext.Provider value = {{phone, nmae}}> for multiple data
        <AppContext.Provider value = {phone}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider;