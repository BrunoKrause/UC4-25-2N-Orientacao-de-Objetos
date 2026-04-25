import { serviceModel } from "../model";

export class integrateAPI implements serviceModel {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
    }
    getPreco(): number {
        return this.preco
    }
}