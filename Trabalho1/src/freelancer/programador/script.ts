// export let devs = [
//     {
//         nome: 'teste' ,
//         listaServicos: ['Landing Page', 'Integrate API', 'Fix Bugs'],
//         nivel: 'P',
//         feedbacks: []
//     }
// ]
import { serviceModel } from "../../servicos/model"
import { fixBugs } from "../../servicos/programador/fixBugs"
import { landingPage } from "../../servicos/programador/landinPage"
import { integrateAPI } from "../../servicos/programador/integrateAPI"
import { feedback } from "../../feedback/feedback"
import { feedback1 } from "../../feedback/feedback"
import { feedback2 } from "../../feedback/feedback"

interface dev {
    nome: string
    listaServicos: serviceModel[]
    nivel: 'J' | 'P' | 'S'
    feedbacks: feedback[]
}

export let devs: dev[] = [
    {
        nome: 'teste',
        listaServicos: [],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    }
]

devs[0]?.listaServicos.push(fixBugs)