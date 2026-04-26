import { serviceModel, Servico } from "../model";

export class editSocialMedia implements Servico {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
    }
    getPreco(): number {
        return this.preco
    }
}