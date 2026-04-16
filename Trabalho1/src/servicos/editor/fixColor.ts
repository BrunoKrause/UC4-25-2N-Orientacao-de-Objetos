import { serviceModel } from "../model";

export class fixColor implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Ajuste de cor, luz, contraste e estilo visual.'
    }
    getPreco(): number {
        return this.preco
    }
}