import { devs } from "./freelancer/programador/script";
import { ExtraUrgencia } from "./adicionais/Urgencia";
import { fixBugs } from "./servicos/programador/fixBugs";
import rl from "readline-sync"

console.clear()
console.log(`
    Escolha um serviço que você quer fazer:
    1 - Fix Bugs
    2 - Integrate API
    3 - Landing Page
    4 - Boost Performance
    5 - Site Institucional
    0 - Sair
`)

let servicoEscolhido = rl.questionInt('Coloque o Servico escolhido: ')
let cont = 0

console.log(`
======================

`)

switch (servicoEscolhido) {
    case 1:
        for( let dev of devs){
            if (dev.listaServicos.includes('1 - Fix Bugs')) {
                cont++
                console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
====================
*Servicos ofertados*  
====================
${dev.listaServicos.join(' | ')}\n`)
            }
        }
        break
    case 2:
        for( let dev of devs){
            if (dev.listaServicos.includes('2 - Integrate API')) {
                cont++
                console.log(`${cont} - ${dev.nome}, ${dev.nivel}  
====================
*Servicos ofertados*  
====================
${dev.listaServicos.join(' | ')}\n`)
            }
        }
        break
    case 3:
        for( let dev of devs){
            if (dev.listaServicos.includes('3 - Landing Page')) {
                cont++
                console.log(`${cont} - ${dev.nome}, ${dev.nivel}  
====================
*Servicos ofertados*  
====================
${dev.listaServicos.join(' | ')}\n`)
            }
        }
        break
    case 4:
        for( let dev of devs){
            if (dev.listaServicos.includes('4 - Boost Performance')) {
                cont++
                console.log(`${cont} - ${dev.nome}, ${dev.nivel}  
====================
*Servicos ofertados*  
====================
${dev.listaServicos.join(' | ')}\n`)
            }
        }
        break
    case 5:
        for( let dev of devs){
            if (dev.listaServicos.includes('5 - Site Institucional')) {
                cont++
                console.log(`${cont} - ${dev.nome}, ${dev.nivel}  
====================
*Servicos ofertados*  
====================
${dev.listaServicos.join(' | ')}\n`)
            }
        }
        break
    case 0:
        console.clear()
        break
    default:
        console.log('Opção não válida.')
        break
}
console.log(`
LEMBRE QUE PROFISSIONAIS MAIS QUALIFICADOS, TEM CUSTOS MAIS ALTOS
`)
let freeEscolhido = rl.questionInt('Escolha com quem quer fazer o servico: ')

switch(freeEscolhido) {
    case 0:
        console.log(devs[0])
        break
}