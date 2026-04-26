import { serviceModel, Servico } from "../model";

export class editVideos implements Servico {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Cortes, organização e elementos visuais.'
    }
    getPreco(): number {
        return this.preco
    }
}