import { serviceModel, Servico } from "../model";

export class fixColor implements Servico {
    nome: string;
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Ajuste de cor, luz, contraste e estilo visual.'
    }
    getPreco(): number {
        return this.preco
    }
}