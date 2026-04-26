import { serviceModel, Servico } from "../model";

export class designSocialMedia implements Servico {
    nome: string;
    preco: number
    
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Criação de posts para Instagram, Facebook, etc.'
    }
    getPreco(): number {
        return this.preco
    }
}