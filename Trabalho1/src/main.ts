import { devs } from "./freelancer/programador/script";
import { editor } from "./freelancer/editor/script";
import { designer } from "./freelancer/designer/script";
import rl from "readline-sync"


console.log(`
=== BEM VINDO AO FREELANCERS ===

    ESCOLHA QUAL TIPO GOSTARIA DE VER

    1 - EDITOR
    2 - DESIGNER
    3 - PROGRAMADOR
`)
let escolhaTipo = rl.questionInt('Digite o número do tipo que você precisa: ')
let servicoEscolhido = 0
let freeEscolhido = 0

function lsDevs() {
    switch (servicoEscolhido) {
        case 1:
            for( let dev of devs){
                if (dev.listaServicos.includes('1 - Fix Bugs')) {
                    console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${dev.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 2:
            for( let dev of devs){
                if (dev.listaServicos.includes('2 - Integrate API')) {
                    console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${dev.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 3:
            for( let dev of devs){
                if (dev.listaServicos.includes('3 - Landing Page')) {
                    console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${dev.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 4:
            for( let dev of devs){
                if (dev.listaServicos.includes('4 - Boost Performance')) {
                    console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${dev.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 5:
            for( let dev of devs){
                if (dev.listaServicos.includes('5 - Site institucional')) {
                    console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${dev.listaServicos.join(' | ')}\n
    --------------------------------`)
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
}
function lsEditor() {
    switch (servicoEscolhido) {
        case 1:
            for( let edi of editor){
                if (edi.listaServicos.includes('1 - Edit Social Media')) {
                    console.log(`${editor.indexOf(edi)} - ${edi.nome}, ${edi.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${edi.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 2:
            for( let edi of editor){
                if (edi.listaServicos.includes('2 - Edit Videos')) {
                    console.log(`${editor.indexOf(edi)} - ${edi.nome}, ${edi.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${edi.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 3:
            for( let edi of editor){
                if (edi.listaServicos.includes('3 - Fix Colors')) {
                    console.log(`${editor.indexOf(edi)} - ${edi.nome}, ${edi.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${edi.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 4:
            for( let edi of editor){
                if (edi.listaServicos.includes('4 - Remove Background')) {
                    console.log(`${editor.indexOf(edi)} - ${edi.nome}, ${edi.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${edi.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 5:
            for( let edi of editor){
                if (edi.listaServicos.includes('5 - Thumbnail')) {
                    console.log(`${editor.indexOf(edi)} - ${edi.nome}, ${edi.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${edi.listaServicos.join(' | ')}\n
    --------------------------------`)
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
}
function lsDesigner() {
    switch (servicoEscolhido) {
        case 1:
            for( let design of designer){
                if (design.listaServicos.includes('1 - Business Card')) {
                    console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${design.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 2:
            for( let design of designer){
                if (design.listaServicos.includes('2 - Social Media Design')) {
                    console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${design.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 3:
            for( let design of designer){
                if (design.listaServicos.includes('3 - Flyer')) {
                    console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${design.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 4:
            for( let design of designer){
                if (design.listaServicos.includes('4 - Create Logo')) {
                    console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${design.listaServicos.join(' | ')}\n
    --------------------------------`)
                }
            }
            break
        case 5:
            for( let design of designer){
                if (design.listaServicos.includes('5 - Website Layout')) {
                    console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    *Servicos ofertados*  
    ====================
    ${design.listaServicos.join(' | ')}\n
    --------------------------------`)
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
}

function showDev() {
    switch(freeEscolhido) {
        case 0:
            console.log(devs[0])
            break
        case 1:
            console.log(devs[1])
            break
        case 2:
            console.log(devs[2])
            break
        case 3:
            console.log(devs[3])
            break
        case 4:
            console.log(devs[4])
            break
        case 5:
            console.log(devs[5])
            break
        case 6:
            console.log(devs[6])
            break
        case 7:
            console.log(devs[7])
            break
        case 8:
            console.log(devs[8])
            break
        default:
            console.log('Opcao inválida')
            break
    }
}
function showEditor() {
    switch(freeEscolhido) {
        case 0:
            console.log(editor[0])
            break
        case 1:
            console.log(editor[1])
            break
        case 2:
            console.log(editor[2])
            break
        case 3:
            console.log(editor[3])
            break
        case 4:
            console.log(editor[4])
            break
        case 5:
            console.log(editor[5])
            break
        case 6:
            console.log(editor[6])
            break
        case 7:
            console.log(editor[7])
            break
        case 8:
            console.log(editor[8])
            break
        default:
            console.log('Opcao inválida')
            break
    }
}
function showDesigner() {
    switch(freeEscolhido) {
        case 0:
            console.log(designer[0])
            break
        case 1:
            console.log(designer[1])
            break
        case 2:
            console.log(designer[2])
            break
        case 3:
            console.log(designer[3])
            break
        case 4:
            console.log(designer[4])
            break
        case 5:
            console.log(designer[5])
            break
        case 6:
            console.log(designer[6])
            break
        case 7:
            console.log(designer[7])
            break
        case 8:
            console.log(designer[8])
            break
        default:
            console.log('Opcao inválida')
            break
    }
}

switch(escolhaTipo) {
    case 1:
        console.log(`
            Escolha um serviço que você quer fazer:
            1 - Edit social media
            2 - Edit vídeos
            3 - Fix color 
            4 - Remove Background
            5 - Thumbnail
            0 - Voltar
        `)
        servicoEscolhido = rl.questionInt('Coloque o Servico escolhido: ')
        lsEditor()
        break
    case 2:
        console.log(`
            Escolha um serviço que você quer fazer
            1 - Business card
            2 - Social media design
            3 - Flyer
            4 - Create logo
            5 - Website layout
            0 - Voltar
        `)
        servicoEscolhido = rl.questionInt('Coloque o Servico escolhido: ')
        lsDesigner()
        break
    case 3:
        console.log(`
            Escolha um serviço que você quer fazer:
            1 - Fix Bugs
            2 - Integrate API
            3 - Landing Page
            4 - Boost Performance
            5 - Site Institucional
            0 - Voltar
        `)
        servicoEscolhido = rl.questionInt('Coloque o Servico escolhido: ')
        lsDevs()
        break
    default:
        break
}


console.log(`
LEMBRE QUE PROFISSIONAIS MAIS QUALIFICADOS, TEM CUSTOS MAIS ALTOS
`)

