import { createContext, ReactNode, useState } from 'react'
import { coffeeMenu } from '../data/coffeeMenu';

interface CoffeeOrder {
    id: string;
    img: string;
    type: string[];
    name: string;
    description: string;
    price: number;
    quantity: number;
}

interface CoffeeOrderContext {
    coffeeOrder: CoffeeOrder[];
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContext);

interface CoffeeOrderProviderProps {
    children: ReactNode;
}

export function CoffeeOrderProvider({ children }: CoffeeOrderProviderProps) {
    const [coffeeOrder, setCoffeeOrder] = useState(coffeeMenu);
    
    return(
        <CoffeeOrderContext.Provider value={{coffeeOrder}}>
            {children}
        </CoffeeOrderContext.Provider>
    )
}