import { serviceModel } from "../model";

export class boostPerformance implements serviceModel {
    preco: number
    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Melhoria na velocidade e eficiência de sites ou sistemas.'
    }
    getPreco(): number {
        return this.preco
    }
}