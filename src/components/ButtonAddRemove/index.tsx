import { Minus, Plus } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';
import { ButtonsContainer } from './style';

interface ButtonAddRemoveProps {
    quantity: number;
    idC: string;
}

export function ButtonAddRemove({ quantity, idC }: ButtonAddRemoveProps) {
    const { addCoffee, removeCoffee } = useContext(CoffeeOrderContext);

    function handleAddCoffeeQuantity(coffeeId: string, e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addCoffee(coffeeId);
    }

    function handleRemoveCoffeeQuantity(coffeeId: string, e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        removeCoffee(coffeeId);
    }

    return (
        <ButtonsContainer id={idC}>
            <button onClick={(e) => handleRemoveCoffeeQuantity(idC, e)}>
                <Minus width={14} />
            </button>
            <p>{quantity}</p>
            <button onClick={(e) => handleAddCoffeeQuantity(idC, e)}>
                <Plus width={14} />
            </button>
        </ButtonsContainer>
    )
}