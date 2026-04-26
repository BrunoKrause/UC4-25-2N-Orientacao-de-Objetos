import { feedback } from "../../feedback/feedback"
import { serviceModel } from "../../servicos/model"
import { Servico } from "../../servicos/model"

export interface freelancer {
    nome: string
    listaServicos: Servico[]
    nivel: 'Júnior' | 'Pleno' | 'Sênior' | 'Iniciante' | 'Intermediario' | 'Profissional'
    feedbacks: feedback[]
}

export let devs: freelancer[] = [
    {
        nome: 'Caua Lima',
        listaServicos: [{
            nome: '1 - Fix Bugs',
            preco: 800,
            getDescricao(): string {
            return this.nome + ` | ` + 'Identificação e solução de erros em sistemas ou sites existentes.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 500,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            }
        ],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Carlos Eduardo',
        listaServicos: [{
            nome: '4 - Boost Performance',
            preco: 650,
            getDescricao(): string {
            return this.nome + ` | ` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
            },
            getPreco() {
                return this.preco
            },
        },
        {
            nome: '5 - Site Institucional',
            preco: 1500,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
        }],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Miguel Gustavo',
        listaServicos: [{
            nome: '2 - Integrate API',
            preco: 700,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
        },
        {
            nome: '4 - Boost Performance',
            preco: 600,
            getDescricao(): string {
            return this.nome + ` | ` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
            },
            getPreco() {
                return this.preco
            },
        }
        ],
        nivel: 'Júnior',
        feedbacks: []
    },
    {
        nome: 'Joao Silva',
        listaServicos: [
            {
            nome: '1 - Fix Bugs',
            preco: 1600,
            getDescricao(): string {
            return this.nome + ` | ` + 'Identificação e solução de erros em sistemas ou sites existentes.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '2 - Integrate API',
            preco: 2000,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 1400,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            },
            {
            nome: '5 - Site Institucional',
            preco: 3800,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
            }
        ],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Felipe Flores',
        listaServicos: [
            {
            nome: '2 - Integrate API',
            preco: 1900,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 1600,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            },
            {
            nome: '4 - Boost Performance',
            preco: 1700,
            getDescricao(): string {
            return this.nome + ` | ` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '5 - Site Institucional',
            preco: 4000,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
            }
        ],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Bruno Krause',
        listaServicos: [
            {
            nome: '1 - Fix Bugs',
            preco: 1500,
            getDescricao(): string {
            return this.nome + ` | ` + 'Identificação e solução de erros em sistemas ou sites existentes.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '2 - Integrate API',
            preco: 2100,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 1700,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            },
            {
            nome: '4 - Boost Performance',
            preco: 2000,
            getDescricao(): string {
            return this.nome + ` | ` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '5 - Site Institucional',
            preco: 5000,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
            }
        ],
        nivel: 'Sênior',
        feedbacks: []
    },
    {
        nome: 'Eduardo Alfonso',
        listaServicos: [
            {
            nome: '1 - Fix Bugs',
            preco: 1100,
            getDescricao(): string {
            return this.nome + ` | ` + 'Identificação e solução de erros em sistemas ou sites existentes.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 900,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            },
            {
            nome: '5 - Site Institucional',
            preco: 2750,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
            }
        ],
        nivel: 'Pleno',
        feedbacks: []
    },
    {
        nome: 'Pedro Ferraz',
        listaServicos: [
            {
            nome: '2 - Integrate API',
            preco: 1300,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: `3 - Landing Page`,
            preco: 1000,
            getDescricao(): string {
            return this.nome + ` | ` + 'Página única focada em conversão (vendas, captura de leads, etc.).'
            },
            getPreco(): number {
            return this.preco
            }
            },
            {
            nome: '4 - Boost Performance',
            preco: 1000,
            getDescricao(): string {
            return this.nome + ` | ` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
            },
            getPreco() {
                return this.preco
            },
            },
        ],
        nivel: 'Pleno',
        feedbacks: []
    },
    {
        nome: 'Jose Arthur',
        listaServicos: [
            {
            nome: '1 - Fix Bugs',
            preco: 900,
            getDescricao(): string {
            return this.nome + ` | ` + 'Identificação e solução de erros em sistemas ou sites existentes.'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '2 - Integrate API',
            preco: 1300,
            getDescricao() {
                return this.nome + ` | ` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
            },
            getPreco() {
                return this.preco
            },
            },
            {
            nome: '5 - Site Institucional',
            preco: 2300,
            getDescricao() {
                return this.nome + ` | ` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
            },
            getPreco() {
                return this.preco
            },
            }
        ],
        nivel: 'Pleno',
        feedbacks: []
    }
]