import { serviceModel, Servico } from "../model";

export class integrateAPI implements Servico {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
    }
    getPreco(): number {
        return this.preco
    }
}