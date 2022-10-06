import { MapPinLine } from 'phosphor-react'

export function Checkout() {
    return(
        <div>
            <h2>Complete seu pedido</h2>
            <div>
                <div>
                    <MapPinLine />
                    <div>
                        <h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber o pedido</p>
                    </div>
                </div>
                <div>
                    <input type="text" id='cep'/>
                    <label htmlFor="cep">CEP</label>

                    <input type="text" id='rua'/>
                    <label htmlFor="rua">Rua</label>

                    <input type="text" id='número'/>
                    <label htmlFor="número">número</label>

                    <input type="text" id='complemento'/>
                    <label htmlFor="complemento">complemento</label>

                    <input type="text" id='cidade'/>
                    <label htmlFor="cidade">cidade</label>

                    <input type="text" id='uf'/>
                    <label htmlFor="uf">uf</label>
                </div>
            </div>
        </div>
    )
}