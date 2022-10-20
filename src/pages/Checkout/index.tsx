import { CheckoutContainer } from './style'

import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Address } from './componentes/Address'
import { Cart } from './componentes/Cart'
import { useNavigate } from 'react-router-dom'
import { DeliveryContext } from '../../context/DeliveryContext'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext'

const deliveryFormValidationSchema = zod.object({
    cep: zod.string().regex(/^[0-9]{5}\-?[0-9]{3}$/, 'Preencha um CEP válido Ex.: 03064-000'),
    numero: zod.string().regex(/^[0-9]/, 'Informe um número válido').min(1, 'Informe o número'),
    complemento: zod.string().optional(),
    rua: zod.string(),
    cidade: zod.string(),
    uf: zod.string(),
    pagamento: zod.string(),
});

type DeliveryDataForm = zod.infer<typeof deliveryFormValidationSchema>;

export function Checkout() {
    const { createNewDelivery, clearForm } = useContext(DeliveryContext);
    const { clearCoffeeOrder } = useContext(CoffeeOrderContext);

    const deliveryForm = useForm<DeliveryDataForm>({
        resolver: zodResolver(deliveryFormValidationSchema),
    });

    const { handleSubmit } = deliveryForm;

    const navigate = useNavigate();

    function handleCreateDelivery(data: DeliveryDataForm) {
        createNewDelivery(data);
        clearForm();
        clearCoffeeOrder();
        navigate('/success');
    }

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