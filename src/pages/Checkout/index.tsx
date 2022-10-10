import { CheckoutContainer } from './style'

import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Address } from './componentes/Address'
import { Cart } from './componentes/Cart'
import { useNavigate } from 'react-router-dom'

const deliveryFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'Informe um CEP com 8 dígitos').max(8, 'Informe um CEP com 8 dígitos'),
    rua: zod.string().min(1, 'Informe o nome da rua'),
    numero: zod.string().min(1, 'Informe o número'),
    uf: zod.string().min(2, 'Informe o estado').max(2, 'Informe o estado'),
    cidade: zod.string().min(3, 'Informe a cidade'),
    pagamento: zod.string(),
});

interface DeliveryData {
    cep: string;
    rua: string;
    numero: number;
    complemento: string | null;
    uf: string;
    cidade: string;
    pagamento: string;
}

export function Checkout() {
    const deliveryForm = useForm<DeliveryData>({
        resolver: zodResolver(deliveryFormValidationSchema),
    });

    const { handleSubmit, formState } = deliveryForm;

    //const navigate = useNavigate();

    function handleCreateDelivery(data: DeliveryData) {
        console.log(data);
        //navigate('/success')
    }

    console.log(formState.errors)

    return (
        <CheckoutContainer >
            <form onSubmit={handleSubmit(handleCreateDelivery)} action="">
                <FormProvider {...deliveryForm}>
                    <Address />
                    <Cart />
                </FormProvider>
            </form>
        </CheckoutContainer>
    )
}