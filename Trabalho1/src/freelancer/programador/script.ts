import { feedback } from "../../feedback/feedback"
import { feedback1 } from "../../feedback/feedback"
import { feedback2 } from "../../feedback/feedback"

export interface freelancer {
    nome: string
    listaServicos: string[]
    nivel: 'J' | 'P' | 'S' | 'Iniciante' | 'Intermediario' | 'Profissional'
    feedbacks: feedback[]
}

export let devs: freelancer[] = [
    {
        nome: 'Caua Lima',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page',],
        nivel: 'J',
        feedbacks: []
    },
    {
        nome: 'Carlos Eduardo',
        listaServicos: ['1 - Landing Page','2 - Integrate API'],
        nivel: 'J',
        feedbacks: []
    },
    {
        nome: 'Miguel Gustavo',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API'],
        nivel: 'J',
        feedbacks: []
    },
    {
        nome: 'Joao Silva',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Felipe Flores',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','3 - Integrate API'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Bruno Krause',
        listaServicos: ['1 - Fix Bugs','2 - Landing Page','3 - Integrate API'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Eduardo Alfonso',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API'],
        nivel: 'P',
        feedbacks: []
    },
    {
        nome: 'Pedro WIlges',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page'],
        nivel: 'P',
        feedbacks: []
    },
    {
        nome: 'Joao Fiuza',
        listaServicos: ['1 - Fix Bugs'],
        nivel: 'P',
        feedbacks: []
    }
]