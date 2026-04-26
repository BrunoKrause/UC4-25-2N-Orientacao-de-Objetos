import { devs, freelancer } from "./freelancer/programador/script";
import { editor } from "./freelancer/editor/script";
import { designer } from "./freelancer/designer/script";
import rl from "readline-sync"
import { serviceModel, Servico } from "./servicos/model";
import { ExtraUrgencia } from "./adicionais/Urgencia";
import { Prioridade } from "./adicionais/Prioridade";
import { Bonus } from "./adicionais/Bonus";
import { feedback } from "./feedback/feedback";



let escolhaTipo = 0
let servicoEscolhido = 0
let servicoEscolhidoS = ''
let servicoEscolhidoObj: serviceModel
let freeEscolhido = 0
let freeEscolhidoObj: freelancer
let adicionalEscolhido = 0
let continuar = 0


function finishing() {

    console.clear()
    
    console.log(`
        Pode selecionar adicionais para o seu produto:
        1 - Urgencia (Tempo de entrega reduzido pela metade | + 50% no valor)
        2 - Prioridade (O projeto passa na frente de outros na agenda do prestador. | + 30% no valor)
        3 - Bonus (Inclusão de algo a mais. | + 15% no valor)
        0 - Voltar
        `)
    continuar = rl.questionInt(`
         Pretende adicionar algum?
         1 - Sim
         2 - Nao, finalizar

        Digite sua resposta: `)
    if (continuar === 1){
        adicionalEscolhido = rl.questionInt(`
        Qual gostaria de selecionar? `)
        switch(adicionalEscolhido){
            case 1:
                servicoEscolhidoObj = new ExtraUrgencia(servicoEscolhidoObj)
                break
            case 2:
                servicoEscolhidoObj = new Prioridade(servicoEscolhidoObj)
                break
            case 3:
                servicoEscolhidoObj = new Bonus(servicoEscolhidoObj)
                break
            case 0:
                finishing()
                break
            default:
                console.log('opcao inválida')
                break
        }
    } 
    console.clear()
    console.log(`
        Resumo:
        ${freeEscolhidoObj.nome}
        ===================
        ${servicoEscolhidoObj.getDescricao()} 
        R$${servicoEscolhidoObj.getPreco()}
        `)
    continuar = rl.questionInt(`
        1 - Finalizar
        2 - Recomecar

        Digite sua resposta: `)
    switch(continuar){
        case 1:
            let feedbackFree: feedback = {
                comentario: rl.question('\nDeixe seu comentario sobre o servico do Freelancer: '),
                nota: rl.questionInt('Deixe a sua nota: ')
            }
            freeEscolhidoObj.feedbacks.push(feedbackFree)
            console.log(freeEscolhidoObj.feedbacks)
            break
        case 2:
            start()
            break
        default:
            console.log('Opçao invalida')
            break
    }
}
function showDev() {
    switch(freeEscolhido) {
        case 0:
            if (devs[0]?.listaServicos)
                for(let service of devs[0]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[0]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[0].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 1:
            if (devs[1]?.listaServicos)
                for(let service of devs[1]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[1]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[1].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 2:
            if (devs[2]?.listaServicos)
                for(let service of devs[2]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[2]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[2].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 3:
            if (devs[3]?.listaServicos)
                for(let service of devs[3]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[3]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[3].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 4:
            if (devs[4]?.listaServicos)
                for(let service of devs[4]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[4]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[4].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 5:
            if (devs[5]?.listaServicos)
                for(let service of devs[5]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[5]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[5].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 6:
            if (devs[6]?.listaServicos)
                for(let service of devs[6]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[6]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[6].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 7:
            if (devs[7]?.listaServicos)
                for(let service of devs[7]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[7]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[7].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 8:
            if (devs[8]?.listaServicos)
                for(let service of devs[8]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = devs[8]
                        servicoEscolhidoObj = service
                    console.log(`\n${devs[8].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        default:
            console.log('Opcao inválida')
            break
    }
}
function showEditor() {
    switch(freeEscolhido) {
        case 0:
            if (editor[0]?.listaServicos)
                for(let service of editor[0]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[0]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[0].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 1:
            if (editor[1]?.listaServicos)
                for(let service of editor[1]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[1]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[1].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 2:
            if (editor[2]?.listaServicos)
                for(let service of editor[2]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[2]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[2].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 3:
            if (editor[3]?.listaServicos)
                for(let service of editor[3]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[3]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[3].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 4:
            if (editor[4]?.listaServicos)
                for(let service of editor[4]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[4]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[4].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 5:
            if (editor[5]?.listaServicos)
                for(let service of editor[5]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[5]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[5].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 6:
            if (editor[6]?.listaServicos)
                for(let service of editor[6]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[6]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[6].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 7:
            if (editor[7]?.listaServicos)
                for(let service of editor[7]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[7]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[7].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 8:
            if (editor[8]?.listaServicos)
                for(let service of editor[8]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = editor[8]
                        servicoEscolhidoObj = service
                    console.log(`\n${editor[8].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        default:
            console.log('Opcao inválida')
            break
    }
}
function showDesigner() {
    switch(freeEscolhido) {
        case 0:
            if (designer[0]?.listaServicos)
                for(let service of designer[0]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[0]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[0].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 1:
            if (designer[1]?.listaServicos)
                for(let service of designer[1]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[1]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[1].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 2:
            if (designer[2]?.listaServicos)
                for(let service of designer[2]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[2]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[2].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 3:
            if (designer[3]?.listaServicos)
                for(let service of designer[3]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[3]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[3].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 4:
            if (designer[4]?.listaServicos)
                for(let service of designer[4]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[4]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[4].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 5:
            if (designer[5]?.listaServicos)
                for(let service of designer[5]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[5]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[5].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 6:
            if (designer[6]?.listaServicos)
                for(let service of designer[6]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[6]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[6].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 7:
            if (designer[7]?.listaServicos)
                for(let service of designer[7]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[7]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[7].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        case 8:
            if (designer[8]?.listaServicos)
                for(let service of designer[8]?.listaServicos) {
                    if( service.nome.includes(servicoEscolhidoS)){
                        freeEscolhidoObj = designer[8]
                        servicoEscolhidoObj = service
                    console.log(`\n${designer[8].nome}
${service.getDescricao()} | R$${service.getPreco()} `)
                }
            }
            finishing()
            break
        default:
            console.log('Opcao inválida')
            break
    }
}
function lsDevs() {
    switch (servicoEscolhido) {
        case 1:
            for( let dev of devs){
                for( let service of dev.listaServicos)
                    if (service.nome.includes('1 - Fix Bugs')) {
                        console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDev()
            break
        case 2:
            for( let dev of devs){
                for( let service of dev.listaServicos)
                    if (service.nome.includes('2 - Integrate API')) {
                        console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDev()
            break
        case 3:
            for( let dev of devs){
                for( let service of dev.listaServicos)
                    if (service.nome.includes('3 - Landing Page')) {
                        console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDev()
            break
        case 4:
            for( let dev of devs){
                for( let service of dev.listaServicos)
                    if (service.nome.includes('4 - Boost Performance')) {
                        console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDev()
            break
        case 5:
            for( let dev of devs){
                for( let service of dev.listaServicos)
                    if (service.nome.includes('5 - Site Institucional')) {
                        console.log(`${devs.indexOf(dev)} - ${dev.nome}, ${dev.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDev()
            break
        case 0:
            console.clear()
            start()
            break
        default:
            console.log('Opção não válida.')
            break
    }
}
function lsEditor() {
    switch (servicoEscolhido) {
        case 1:
            for( let edit of editor){
                for( let service of edit.listaServicos)
                    if (service.nome.includes('1 - Edit social media')) {
                        console.log(`${editor.indexOf(edit)} - ${edit.nome}, ${edit.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showEditor()
            break
        case 2:
            for( let edit of editor){
                for( let service of edit.listaServicos)
                    if (service.nome.includes('2 - Edit videos')) {
                        console.log(`${editor.indexOf(edit)} - ${edit.nome}, ${edit.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showEditor()
            break
        case 3:
            for( let edit of editor){
                for( let service of edit.listaServicos)
                    if (service.nome.includes('3 - Fix color')) {
                        console.log(`${editor.indexOf(edit)} - ${edit.nome}, ${edit.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showEditor()
            break
        case 4:
            for( let edit of editor){
                for( let service of edit.listaServicos)
                    if (service.nome.includes('4 - Remove Background')) {
                        console.log(`${editor.indexOf(edit)} - ${edit.nome}, ${edit.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showEditor()
            break
        case 5:
            for( let edit of editor){
                for( let service of edit.listaServicos)
                    if (service.nome.includes('5 - Thumbnail')) {
                        console.log(`${editor.indexOf(edit)} - ${edit.nome}, ${edit.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showEditor()
            break
        case 0:
            console.clear()
            start()
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
                for( let service of design.listaServicos)
                    if (service.nome.includes('1 - Business card')) {
                        console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDesigner()
            break
        case 2:
            for( let design of designer){
                for( let service of design.listaServicos)
                    if (service.nome.includes('2 - Social media design')) {
                        console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDesigner()
            break
        case 3:
            for( let design of designer){
                for( let service of design.listaServicos)
                    if (service.nome.includes('3 - Flyer')) {
                        console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDesigner()
            break
        case 4:
            for( let design of designer){
                for( let service of design.listaServicos)
                    if (service.nome.includes('4 - Create logo')) {
                        console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDesigner()
            break
        case 5:
            for( let design of designer){
                for( let service of design.listaServicos)
                    if (service.nome.includes('5 - Website layout')) {
                        console.log(`${designer.indexOf(design)} - ${design.nome}, ${design.nivel}  
    ====================
    ${service.getDescricao()} | R$${service.getPreco()}\n
    --------------------------------\n`)
                        servicoEscolhidoS = service.nome
                }
            }
            freeEscolhido = rl.questionInt('Coloque o Freelancer escolhido: ')
            showDesigner()
            break
        case 0:
            console.clear()
            start()
            break
        default:
            console.log('Opção não válida.')
            break
    }
}


function start() {
    console.clear()
    console.log(`
    === BEM VINDO AO FREELANCERS ===

    ESCOLHA QUAL TIPO GOSTARIA DE VERIFICAR

    1 - EDITOR
    2 - DESIGNER
    3 - PROGRAMADOR
    `)
    escolhaTipo = rl.questionInt('Digite o numero do tipo que voce precisa: ')
    console.clear()

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
            console.clear()
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
            console.clear()
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
            console.clear()
            lsDevs()
            break
        default:
            break
    }
}

start()