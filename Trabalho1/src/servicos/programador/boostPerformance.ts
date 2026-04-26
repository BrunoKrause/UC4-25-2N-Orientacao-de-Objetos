import { serviceModel, Servico } from "../model";

export class boostPerformance implements Servico {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Melhoria na velocidade e eficiência de sites ou sistemas.'
    }
    getPreco(): number {
        return this.preco
    }
}