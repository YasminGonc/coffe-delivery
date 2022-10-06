import { ButtonsContainer, CoffeeContainer, Description, HomeContainer, IconContainer, MenuContainer, QuantityContainer, ShoppContainer, Tag, Title } from './style'

import { Banner } from './components/Banner'
import coffee from '../../assets/arabe.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Home() {
    return(
        <HomeContainer>
            <Banner />

            <h2>Nossos cafés</h2>
            
            <MenuContainer>
                <CoffeeContainer>
                    <img src={coffee}/>

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <QuantityContainer>
                            <ButtonsContainer>
                                <button>
                                    <Minus width={14}/>
                                </button>
                                <p>1</p>
                                <button>
                                    <Plus width={14} />
                                </button>
                            </ButtonsContainer>

                            <IconContainer title='Adicionar ao carrinho'>
                                <ShoppingCart weight='fill'/>
                            </IconContainer>
                        </QuantityContainer>
                    </ShoppContainer>
                </CoffeeContainer>

                <CoffeeContainer>
                    <img src={coffee}/>

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <QuantityContainer>
                            <ButtonsContainer>
                                <button>
                                    <Minus width={14}/>
                                </button>
                                <p>1</p>
                                <button>
                                    <Plus width={14} />
                                </button>
                            </ButtonsContainer>

                            <IconContainer title='Adicionar ao carrinho'>
                                <ShoppingCart weight='fill'/>
                            </IconContainer>
                        </QuantityContainer>
                    </ShoppContainer>

                </CoffeeContainer>

                <CoffeeContainer>
                    <img src={coffee}/>

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <QuantityContainer>
                            <ButtonsContainer>
                                <button>
                                    <Minus width={14}/>
                                </button>
                                <p>1</p>
                                <button>
                                    <Plus width={14} />
                                </button>
                            </ButtonsContainer>

                            <IconContainer title='Adicionar ao carrinho'>
                                <ShoppingCart weight='fill'/>
                            </IconContainer>
                        </QuantityContainer>
                    </ShoppContainer>

                </CoffeeContainer>

                <CoffeeContainer>
                    <img src={coffee}/>

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <QuantityContainer>
                            <ButtonsContainer>
                                <button>
                                    <Minus width={14}/>
                                </button>
                                <p>1</p>
                                <button>
                                    <Plus width={14} />
                                </button>
                            </ButtonsContainer>

                            <IconContainer title='Adicionar ao carrinho'>
                                <ShoppingCart weight='fill'/>
                            </IconContainer>
                        </QuantityContainer>
                    </ShoppContainer>

                </CoffeeContainer>

                <CoffeeContainer>
                    <img src={coffee}/>

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <QuantityContainer>
                            <ButtonsContainer>
                                <button>
                                    <Minus width={14}/>
                                </button>
                                <p>1</p>
                                <button>
                                    <Plus width={14} />
                                </button>
                            </ButtonsContainer>

                            <IconContainer title='Adicionar ao carrinho'>
                                <ShoppingCart weight='fill'/>
                            </IconContainer>
                        </QuantityContainer>
                    </ShoppContainer>

                </CoffeeContainer>

            </MenuContainer>

        </HomeContainer>
    )
}