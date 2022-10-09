import { createContext, ReactNode, useEffect, useState } from 'react'
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
    coffeeOrderMenu: CoffeeOrder[];
    coffeeOrder: CoffeeOrder[];
    showOrderQuantity: boolean;
    orderQuantity: number;
    coffeeBill: number
    addCoffee: (id: string) => void;
    removeCoffee: (id: string) => void;
    showComponentWithOrderQuantity: () => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContext);

interface CoffeeOrderProviderProps {
    children: ReactNode;
}

export function CoffeeOrderProvider({ children }: CoffeeOrderProviderProps) {
    const [coffeeOrderMenu, setCoffeeOrderMenu] = useState(coffeeMenu);
    const [coffeeOrder, setCoffeeOrder] = useState<CoffeeOrder[]>([]);
    const [showOrderQuantity, setShowOrderQuantity] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [coffeeBill, setCoffeeBill] = useState(0);

    function addCoffee(id: string) {
       const sumCoffeQuantity = coffeeOrderMenu.map(coffee => {return coffee.id == id ? {...coffee, quantity: coffee.quantity + 1} : {...coffee}});
       setCoffeeOrderMenu(sumCoffeQuantity);
    }

    function removeCoffee(id: string) {
        const subtractCoffeQuantity = coffeeOrderMenu.map(coffee => {return (coffee.id == id && coffee.quantity > 0) ? {...coffee, quantity: coffee.quantity - 1} : {...coffee}});
        setCoffeeOrderMenu(subtractCoffeQuantity);
    }

    function showComponentWithOrderQuantity() {
        setShowOrderQuantity(true); 
    }

    function checkQuantity(orderMenu: CoffeeOrder) {
        return orderMenu.quantity > 0
    }

    useEffect(() => {
        const orderSum = coffeeOrderMenu.reduce((acumulador, currentValue) => {return acumulador + currentValue.quantity}, 0);
        setOrderQuantity(orderSum);

        const coffeeOrderWithQuantities = coffeeOrderMenu.filter(checkQuantity);
        setCoffeeOrder(coffeeOrderWithQuantities);

        const billAmount = coffeeOrderMenu.reduce((acumulador, currentValue) => {return acumulador + (currentValue.quantity * currentValue.price)}, 0);
        setCoffeeBill(billAmount);
    
    }, [coffeeOrderMenu])
    
    return(
        <CoffeeOrderContext.Provider value={{coffeeOrderMenu, coffeeOrder, showOrderQuantity, orderQuantity, coffeeBill, addCoffee, removeCoffee, showComponentWithOrderQuantity}}>
            {children}
        </CoffeeOrderContext.Provider>
    )
}