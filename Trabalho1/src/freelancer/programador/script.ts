import { feedback } from "../../feedback/feedback"
import { feedback1 } from "../../feedback/feedback"
import { feedback2 } from "../../feedback/feedback"

export interface freelancer {
    nome: string
    listaServicos: string[]
    nivel: 'Júnior' | 'Pleno' | 'Sênior' | 'Iniciante' | 'Intermediario' | 'Profissional'
    feedbacks: feedback[]
}

export let devs: freelancer[] = [
    {
        nome: 'Caua Lima',
        listaServicos: ['2 - Integrate API', '3 - Landing Page',],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Carlos Eduardo',
        listaServicos: ['5 - Site institucional','3 - Landing Page','2 - Integrate API'],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Miguel Gustavo',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API'],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Joao Silva',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing page','5 - Site institucional'],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Felipe Flores',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing Page','4 - Boost performance','5 - Site institucional'],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Bruno Krause',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing Page','4 - Boost performance'],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Eduardo Alfonso',
        listaServicos: ['5 - Site institucional','2 - Integrate API','3 - Landing page'],
        nivel: 'Pleno',
        feedbacks: []
    },
    {
        nome: 'Pedro Ferraz',
        listaServicos: ['1 - Fix Bugs', '2 - Landing Page','4 - Boost perfomance'],
        nivel: 'Pleno',
        feedbacks: []
    },
    {
        nome: 'Jose Arthur',
        listaServicos: ['1 - Fix Bugs','2 - Integrate API','3 - Landing page','5 - Site institucional'],
        nivel: 'Pleno',
        feedbacks: []
    }
]