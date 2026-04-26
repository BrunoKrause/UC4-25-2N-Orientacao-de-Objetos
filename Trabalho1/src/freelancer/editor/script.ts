import { freelancer } from "../programador/script";

export let editor: freelancer[] = [
    {
        nome: 'Kauanny Ferreira',
        listaServicos: [
            {
                nome: '3 - Fix color',
                preco: 40,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Thumbnail',
                preco: 30,
                getDescricao() {
                    return this.nome + ' | ' + 'Design de capa chamativa para redes sociais.'
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
        nome: 'Deividson Alves',
        listaServicos: [
            {
                nome: '2 - Edit videos',
                preco: 150,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 25,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
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
        nome: 'Railane Gomes',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 70,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 35,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
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
        nome: 'Jucilene Batista',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 120,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 85,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Thumbnail',
                preco: 48,
                getDescricao() {
                    return this.nome + ' | ' + 'Design de capa chamativa para redes sociais.'
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
        nome: 'Cleiton Rodrigues',
        listaServicos: [
            {
                nome: '2 - Edit videos',
                preco: 280,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 90,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 40,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
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
        nome: 'Wescley Martins',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 100,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Edit videos',
                preco: 300,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 65,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
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
        nome: 'Francilene Barbosa',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 145,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Edit videos',
                preco: 435,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 150,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 90,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Thumbnail',
                preco: 110,
                getDescricao() {
                    return this.nome + ' | ' + 'Design de capa chamativa para redes sociais.'
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
        nome: 'Admilson Carvalho',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 175,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Edit videos',
                preco: 480,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 120,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 80,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Thumbnail',
                preco: 80,
                getDescricao() {
                    return this.nome + ' | ' + 'Design de capa chamativa para redes sociais.'
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
        nome: 'Taynara Ribeiro',
        listaServicos: [
            {
                nome: '1 - Edit social media',
                preco: 160,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '2 - Edit videos',
                preco: 450,
                getDescricao() {
                    return this.nome + ' | ' + 'Cortes, organização e elementos visuais.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '3 - Fix color',
                preco: 130,
                getDescricao() {
                    return this.nome + ' | ' + 'Ajuste de cor, luz, contraste e estilo visual.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '4 - Remove Background',
                preco: 70,
                getDescricao() {
                    return this.nome + ' | ' + 'Recorte e melhoria geral da imagem.'
                },
                getPreco() {
                    return this.preco
                },
            },
            {
                nome: '5 - Thumbnail',
                preco: 90,
                getDescricao() {
                    return this.nome + ' | ' + 'Design de capa chamativa para redes sociais.'
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
