import { serviceModel } from "../model";

export class fixBugs implements serviceModel {
    descricao: string;
    preco: number

    constructor(preco: number) {
        this.preco = preco
        this.descricao = 'Identificação e solução de erros em sistemas ou sites existentes.'
    }
    getDescricao(): string {
        return this.descricao
    }
    getPreco(): number {
        return this.preco
    }
}