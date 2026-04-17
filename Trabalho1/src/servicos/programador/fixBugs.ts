import { serviceModel } from "../model";

export class fixBugs implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Identificação e solução de erros em sistemas ou sites existentes.'
    }
    getPreco(): number {
        return this.preco
    }
}