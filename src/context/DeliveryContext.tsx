import { createContext, ReactNode, useState } from 'react'
import { DeliveryDataForm } from '../pages/Checkout';

interface DeliveryData {
    id: string;
    rua: string;
    numero: number;
    uf: string;
    cidade: string;
    pagamento: string;
}

interface DeliveryContext {
    deliveryInfos: DeliveryData | null | undefined;
    createNewDelivery: (data: DeliveryDataForm) => void;
}

export const DeliveryContext = createContext({} as DeliveryContext);

interface DeliveryProviderProps {
    children: ReactNode;
}

export function DeliveryProvider({ children }: DeliveryProviderProps) {
    const [deliveryInfos, setDeliveryInfos] = useState<DeliveryData | null>();

    function createNewDelivery(data: DeliveryDataForm) {
        const newDelivery: DeliveryData = {
            id: String(new Date().getTime()),
            rua: data.rua,
            numero: data.numero,
            uf: data.uf,
            cidade: data.cidade,
            pagamento: data.pagamento,
        }
        setDeliveryInfos(newDelivery);
    }

    return(
        <DeliveryContext.Provider value={{ deliveryInfos, createNewDelivery, }}>
            {children}
        </DeliveryContext.Provider>
    )
}