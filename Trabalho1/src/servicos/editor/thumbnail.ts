import { serviceModel, Servico } from "../model";

export class thumbnail implements Servico {
    nome: string
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Design de capa chamativa para redes sociais.'
    }
    getPreco(): number {
        return this.preco
    }
}