import rl from 'readline-sync'
import { fixBugs } from '../servicos/programador/fixBugs'

const fixBugs1 = new fixBugs(800)

export const adicionais = [
    {
        id: 1,
        nome: 'Urgência',
        tipo: 'Porcentagem',
        value: 50,
        multiplo: false
    },
    {
        id: 2,
        nome: 'Prioridade',
        tipo: 'Porcentagem',
        value: 30,
        multiplo: false    
    },
    {
        id: 3,
        nome: 'Bônus',
        tipo: 'Fixo',
        value: 200,
        multiplo: true
    }
]

console.table(adicionais, ["id", "nome"]);

let i = rl.questionInt('Escolha um bônus:') - 1

switch(i) {
    case 1:
        fixBugs1.preco += fixBugs1.preco * (50 / 100)
        console.log(fixBugs1.getPreco())
        
        break
    default:
        break
}