import { createContext, ReactNode, useEffect, useState } from 'react'
import { DeliveryDataForm } from '../pages/Checkout';

interface DeliveryData {
    id: string;
    numero: number;
    pagamento: string;
}

interface APIData {
    localidade: string;
    logradouro: string;
    uf: string;
    bairro: string;
}

interface DeliveryContext {
    deliveryInfos: DeliveryData | null | undefined;
    dataFromAPI: APIData | null | undefined;
    dataFromAPIFailed: string;
    createNewDelivery: (data: DeliveryDataForm) => void;
    takeCepFromInput: (cep: string) => void;
}

export const DeliveryContext = createContext({} as DeliveryContext);

interface DeliveryProviderProps {
    children: ReactNode;
}

export function DeliveryProvider({ children }: DeliveryProviderProps) {
    const [deliveryInfos, setDeliveryInfos] = useState<DeliveryData | null>();
    const [cep, setCep] = useState('');
    const [dataFromAPI, setDataFromAPI] = useState<APIData | null>();
    const [dataFromAPIFailed, setDataFromAPIFailed] = useState('');

    function createNewDelivery(data: DeliveryDataForm) {
        const newDelivery: DeliveryData = {
            id: String(new Date().getTime()),
            numero: data.numero,
            pagamento: data.pagamento,
        }
        setDeliveryInfos(newDelivery);
    }

    function takeCepFromInput(cep: string) {
        setCep(cep);
    }

    useEffect(() => {
        if(cep.length > 7) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        setDataFromAPIFailed('Esse CEP não existe. Digite um CEP válido.');
                    }
                    else {
                        const APIData: APIData = {
                            localidade: data.localidade,
                            logradouro: data.logradouro,
                            uf: data.uf,
                            bairro: data.bairro,
                        }
                        setDataFromAPI(APIData);
                        setDataFromAPIFailed('');
                    }
                })
        }
        
    }, [cep]);

    //console.log(dataFromAPI)

    return(
        <DeliveryContext.Provider value={{ deliveryInfos, dataFromAPI, dataFromAPIFailed, createNewDelivery, takeCepFromInput}}>
            {children}
        </DeliveryContext.Provider>
    )
}