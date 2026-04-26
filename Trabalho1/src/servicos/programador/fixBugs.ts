import { serviceModel, Servico } from "../model";

export class fixBugs implements Servico {
    nome: string
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Identificação e solução de erros em sistemas ou sites existentes.'
    }
    getPreco(): number {
        return this.preco
    }
}