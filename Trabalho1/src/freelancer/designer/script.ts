import { freelancer } from "../programador/script";

export let designer: freelancer[] = [
    {
        nome: 'Bruno Carvalho',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 40,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Social media design',
                preco: 20,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 300,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Iniciante',
        feedbacks: []
    },
    {
        nome: 'Rafael Ferreira ',
        listaServicos: [
            {
                nome: '2 - Social media design',
                preco: 30,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 100,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
        ],
        nivel: 'Iniciante',
        feedbacks: []
    },
    {
        nome: 'Juliana Alves',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 30,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Flyer',
                preco: 40,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
        ],
        nivel: 'Iniciante',
        feedbacks: []
    },
    {
        nome: 'Gabriel Rodrigues',
        listaServicos: [
            {
                nome: '3 - Flyer',
                preco: 100,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 400,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 560,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Intermediario',
        feedbacks: []
    },
    {
        nome: 'Beatriz Costa',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 90,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Flyer',
                preco: 85,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 700,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Intermediario',
        feedbacks: []
    },
    {
        nome: 'Lucas Pereira',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 80,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Social media design',
                preco: 60,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 350,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
            
        ],
        nivel: 'Intermediario',
        feedbacks: []
    },
    {
        nome: 'Ana Souza',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 150,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Social media design',
                preco: 120,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Flyer',
                preco: 180,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 800,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 1500,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Profissional',
        feedbacks: []
    },
    {
        nome: 'Pedro Santos',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 130,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Social media design',
                preco: 150,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Flyer',
                preco: 200,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 750,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 1600,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Profissional',
        feedbacks: []
    },
    {
        nome: 'Maria Oliveira',
        listaServicos: [
            {
                nome: '1 - Business card',
                preco: 146,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de cartão de visita profissional com foco na apresentação clara das informações e identidade visual da marca.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Social media design',
                preco: 178,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de artes para redes sociais com foco em engajamento e comunicação visual consistente.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Flyer',
                preco: 170,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação de material gráfico para divulgação, destacando informações de forma clara e atrativa.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Create logo',
                preco: 900,
                getDescricao() {
                    return this.nome + ' | ' + 'Desenvolvimento de logotipo que representa a identidade visual da marca de forma única e memorável.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Website layout',
                preco: 1400,
                getDescricao() {
                    return this.nome + ' | ' + 'Criação do layout visual de sites com foco em organização, estética e experiência do usuário.'
                },
                getPreco() {
                    return this.preco
                },
            }
        ],
        nivel: 'Profissional',
        feedbacks: []
    }
]
