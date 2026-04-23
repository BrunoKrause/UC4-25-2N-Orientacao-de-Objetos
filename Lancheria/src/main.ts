import { AdicionalBacon } from "./AdicionalBacon";
import { AdicionalMaionese } from "./AdicionalMaionese";
import { AdicionalQueijo } from "./AdicionalQueijo";
import { Pastel } from "./Pastel";
import { lanche } from "./lanche";
import rl from 'readline-sync'

function menu() {
    const nome: string = rl.question('Digite seu nome: ')

    console.log(`
    ----- Pastelaria -----
    
    Bem Vindp, ${nome}!
    Escolha o seu lanche:

    1 - Pastel
    `);

    const opcao: number = rl.questionInt('Digite sua opção: ')

    let lanche: lanche;

    switch(opcao){
        case 1:
            lanche = new Pastel()
            break
        default:
            console.log('Opção inválida')
            return
    }

    let adicionar: boolean = true

    while(adicionar) {
        console.log(`
            Desenha adicionar algo?

            1 - Bacon
            2 - Maionese
            3 - Queijo
            0 - Finalizar
        `)

    const opAdicional: number = rl.questionInt("Escolha: ")

    switch(opAdicional) {
        case 1:
            lanche = new AdicionalBacon(lanche)
            break
        case 2:
            lanche = new AdicionalMaionese(lanche)
            break
        case 3:
            lanche = new AdicionalQueijo(lanche)
            break
        case 0:
            adicionar = false
            break
        default:
            console.log('Opção Inválida')
            break
    }
    
    console.log(`
        ---------- Pedido --------

        Cliente: ${nome}
        Lanche: ${lanche.getDescricao()}
        Preço: R$ ${lanche.getPreco().toFixed(2)}

        Obrigado pela preferência, volte sempre!💕
    `)
    }
}

menu()