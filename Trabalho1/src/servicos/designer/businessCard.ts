import { serviceModel, Servico } from "../model";

export class businessCard implements Servico {
    nome: string;
    preco: number
    
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Design de cartão para empresas ou profissionais.'
    }
    getPreco(): number {
        return this.preco
    }
}