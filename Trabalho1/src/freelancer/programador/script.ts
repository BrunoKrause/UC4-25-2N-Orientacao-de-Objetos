import { feedback } from "../../feedback/feedback"
import { feedback1 } from "../../feedback/feedback"
import { feedback2 } from "../../feedback/feedback"

export interface freelancer {
    nome: string
    listaServicos: string[]
    nivel: 'J' | 'P' | 'S'
    feedbacks: feedback[]
}

export let devs: freelancer[] = [
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    },
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    },
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    },
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    },
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    },
    {
        nome: 'teste',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'J',
        feedbacks: [feedback1,feedback2]
    }
]
