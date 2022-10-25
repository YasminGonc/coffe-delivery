import { createContext, ReactNode, useEffect, useState } from 'react';

interface DeliveryData {
    cidade: string;
    complemento?: string;
    numero: string;
    pagamento: string;
    rua: string;
    uf: string;
}

interface APIData {
    localidade: string;
    logradouro: string;
    uf: string;
    bairro: string;
    erro?: string;
}

interface DeliveryContext {
    deliveryInfos: DeliveryData | null | undefined;
    dataFromAPI: APIData | null | undefined;
    dataFromAPIFailed: string;
    createNewDelivery: (data: DeliveryData) => void;
    takeCepFromInput: (cep: string) => void;
    clearForm: () => void;
}

export const DeliveryContext = createContext({} as DeliveryContext);

interface DeliveryProviderProps {
    children: ReactNode;
}

export function DeliveryProvider({ children }: DeliveryProviderProps) {
    const [deliveryInfos, setDeliveryInfos] = useState<DeliveryData | null>(null);
    const [cep, setCep] = useState('');
    const [dataFromAPI, setDataFromAPI] = useState<APIData | null>(null);
    const [dataFromAPIFailed, setDataFromAPIFailed] = useState('');

    function createNewDelivery(data: DeliveryData) {
        const newDelivery: DeliveryData = {
            cidade: data.cidade,
            complemento: data?.complemento,
            numero: data.numero,
            pagamento: data.pagamento,
            rua: data.rua,
            uf: data.uf
        }
        setDeliveryInfos(newDelivery);
    }

    function takeCepFromInput(cep: string) { 
        setCep(cep);
    }

    function clearForm() {
        setCep('');
        setDataFromAPI(null);
    }

    useEffect(() => {
        if (cep.length > 7) {
            fetch(`https:viacep.com.br/ws/${cep}/json/`)
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

    return (
        <DeliveryContext.Provider value={{ deliveryInfos, dataFromAPI, dataFromAPIFailed, createNewDelivery, takeCepFromInput, clearForm }}>
            {children}
        </DeliveryContext.Provider>
    )
}