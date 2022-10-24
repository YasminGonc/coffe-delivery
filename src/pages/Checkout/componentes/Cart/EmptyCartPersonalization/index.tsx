import croct from '@croct/plug';
import { useCroct, useEvaluation } from '@croct/plug-react';
import { useCallback, useContext } from 'react';
import { CoffeeOrderContext } from '../../../../../context/CoffeeOrderContext';
import { AddToCart, ImageContainer, PersonalizationContainer } from './styles';

croct.plug({ appId: '00000000-0000-0000-0000-000000000000' });


export function EmptyCartPersonalization() {
    const { coffeeOrderMenu, addCoffee } = useContext(CoffeeOrderContext);
    
    const date = useEvaluation<string>("today's weekday");

    function handleAddCoffeToCartPersonalized(coffeeId: string, e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addCoffee(coffeeId);
    }

    return (
        <>
            {(date == '0') &&
                <PersonalizationContainer>
                    <p>Exagerou no sábado? Vai de {coffeeOrderMenu[0].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[0].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[0].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '1') &&
                <PersonalizationContainer>
                    <p>Comece bem a semana com nosso {coffeeOrderMenu[1].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[1].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[1].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '2') &&
                <PersonalizationContainer>
                    <p>Sua terça merece um {coffeeOrderMenu[3].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[3].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[3].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '3') &&
                <PersonalizationContainer>
                    <p>Metade da semana pede um {coffeeOrderMenu[8].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[8].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[8].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '4') &&
                <PersonalizationContainer>
                    <p>Quinta é dia de {coffeeOrderMenu[11].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[11].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[11].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '5') &&
                <PersonalizationContainer>
                    <p>Sextou com {coffeeOrderMenu[13].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[13].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[13].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
            {(date == '6') &&
                <PersonalizationContainer>
                    <p>Sábado relax com {coffeeOrderMenu[9].name}</p>
                    <ImageContainer>
                        <img src={coffeeOrderMenu[9].img} alt="" />
                        <AddToCart 
                            onClick={(e) => handleAddCoffeToCartPersonalized(coffeeOrderMenu[9].id, e)}
                        >
                            Adicionar ao carrinho
                        </AddToCart>
                    </ImageContainer>
                </PersonalizationContainer>
            }
        </>
    )
}