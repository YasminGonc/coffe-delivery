import expressoTradicional from '../assets/expresso-tradicional.png';
import expressoAmericano from '../assets/expresso-americano.png';
import expressoCremoso from '../assets/expresso-cremoso.png';
import expressoGelado from '../assets/cafe-gelado.png';
import cafeComLeite from '../assets/cafe-com-leite.png';
import latte from '../assets/latte.png';
import cappuccino from '../assets/cappuccino.png';
import macchiato from '../assets/macchiato.png';
import mochaccino from '../assets/mochaccino.png';
import chocolateQuente from '../assets/chocolate-quente.png';
import cubano from '../assets/cubano.png';
import havaiano from '../assets/havaiano.png';
import arabe from '../assets/arabe.png';
import irlandes from '../assets/irlandes.png';

export const coffeeMenu = [
    {
        id: '1',
        img: expressoTradicional,
        type: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 8.00,
        quantity: 0,
    },
    {
        id: '2',
        img: expressoAmericano,
        type: ['tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 8.00,
        quantity: 0,
    },
    {
        id: '3',
        img: expressoCremoso,
        type: ['tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 8.90,
        quantity: 0,
    },
    {
        id: '4',
        img: expressoGelado,
        type: ['tradicional', 'gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 8.00,
        quantity: 0,
    },
    {
        id: '5',
        img: cafeComLeite,
        type: ['tradicional', 'com leite'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 13.00,
        quantity: 0,
    },
    {
        id: '6',
        img: latte,
        type: ['tradicional', 'com leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 13.00,
        quantity: 0,
    },
    {
        id: '7',
        img: cappuccino,
        type: ['tradicional', 'com leite'],
        name: 'Cappuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 13.00,
        quantity: 0,
    },
    {
        id: '8',
        img: macchiato,
        type: ['tradicional', 'com leite'],
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 8.00,
        quantity: 0,
    },
    {
        id: '9',
        img: mochaccino,
        type: ['tradicional', 'com leite'],
        name: 'Mochaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 14.00,
        quantity: 0,
    },
    {
        id: '10',
        img: chocolateQuente,
        type: ['especial', 'com leite'],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 16.00,
        quantity: 0,
    },
    {
        id: '11',
        img: cubano,
        type: ['especial', 'alcoólico', 'gelado'],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 20.00,
        quantity: 0,
    },
    {
        id: '12',
        img: havaiano,
        type: ['especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 16.00,
        quantity: 0,
    },
    {
        id: '13',
        img: arabe,
        type: ['especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 22.00,
        quantity: 0,
    },
    {
        id: '14',
        img: irlandes,
        type: ['especial', 'alcoólico'],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 22.00,
        quantity: 0,
    }
]