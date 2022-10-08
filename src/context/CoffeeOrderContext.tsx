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
    addCoffee: (id: string) => void;
    removeCoffee: (id: string) => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContext);

interface CoffeeOrderProviderProps {
    children: ReactNode;
}

export function CoffeeOrderProvider({ children }: CoffeeOrderProviderProps) {
    const [coffeeOrder, setCoffeeOrder] = useState(coffeeMenu);

    function addCoffee(id: string) {
       const sumCoffeQuantity = coffeeOrder.map(coffee => {return coffee.id == id ? {...coffee, quantity: coffee.quantity + 1} : {...coffee}});
       setCoffeeOrder(sumCoffeQuantity);
    }

    function removeCoffee(id: string) {
        const subtractCoffeQuantity = coffeeOrder.map(coffee => {return (coffee.id == id && coffee.quantity > 0) ? {...coffee, quantity: coffee.quantity - 1} : {...coffee}});
        setCoffeeOrder(subtractCoffeQuantity);
    }
    
    return(
        <CoffeeOrderContext.Provider value={{coffeeOrder, addCoffee, removeCoffee}}>
            {children}
        </CoffeeOrderContext.Provider>
    )
}