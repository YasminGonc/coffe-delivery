import { Minus, Plus } from "phosphor-react";
import { ButtonsContainer } from "./style";

interface ButtonAddRemoveProps {
    quantity: number;
}

export function ButtonAddRemove({ quantity }: ButtonAddRemoveProps) {
    return (
        <ButtonsContainer>
            <button>
                <Minus width={14} />
            </button>
            <p>{quantity}</p>
            <button>
                <Plus width={14} />
            </button>
        </ButtonsContainer>
    )
}