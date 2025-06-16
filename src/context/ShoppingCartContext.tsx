import { createContext, useContext, type ReactNode } from "react";

type ShoppignCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({children} : ShoppignCartProviderProps){
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}