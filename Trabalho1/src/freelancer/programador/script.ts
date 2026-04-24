import { feedback } from "../../feedback/feedback"

export interface freelancer {
    nome: string
    listaServicos: string[]
    nivel: 'J' | 'P' | 'S' | 'Iniciante' | 'Intermediario' | 'Profissional'
    feedbacks: feedback[]
}

export let devs: freelancer[] = [
    {
        nome: 'Caua Lima',
        listaServicos: ['2 - Integrate API', '3 - Landing Page',],
        nivel: 'J',
        feedbacks: []
    },
    {
        nome: 'Carlos Eduardo',
        listaServicos: ['5 - Site institucional','3 - Landing Page','2 - Integrate API'],
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
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing page','5 - Site institucional'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Felipe Flores',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing Page','4 - Boost performance','5 - Site institucional'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Bruno Krause',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing Page','4 - Boost performance'],
        nivel: 'S',
        feedbacks: []
    },
    {
        nome: 'Eduardo Alfonso',
        listaServicos: ['5 - Site institucional','2 - Integrate API','3 - Landing page'],
        nivel: 'P',
        feedbacks: []
    },
    {
        nome: 'Pedro Ferraz',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','4 - Boost perfomance'],
        nivel: 'P',
        feedbacks: []
    },
    {
        nome: 'Jose Arthur',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing page','5 - Site institucional'],
        nivel: 'P',
        feedbacks: []
    }
]