import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CoffeeOrderContext } from "../../context/CoffeeOrderContext";
import { ButtonsContainer } from "./style";

interface ButtonAddRemoveProps {
    quantity: number;
    idC: string;
}

export function ButtonAddRemove({ quantity, idC }: ButtonAddRemoveProps) {
    const { addCoffee, removeCoffee } = useContext(CoffeeOrderContext);

    function handleAddCoffeeQuantity(coffeeId: string) {
        addCoffee(coffeeId);
    }

    function handleRemoveCoffeeQuantity(coffeeId: string) {
        removeCoffee(coffeeId);
    }

    return (
        <ButtonsContainer id={idC}>
            <button onClick={() => handleRemoveCoffeeQuantity(idC)}>
                <Minus width={14} />
            </button>
            <p>{quantity}</p>
            <button onClick={() => handleAddCoffeeQuantity(idC)}>
                <Plus width={14} />
            </button>
        </ButtonsContainer>
    )
}