import { serviceModel } from "../model";

export class editSocialMedia implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Cortes dinâmicos, legendas, trilha e ajustes básicos.'
    }
    getPreco(): number {
        return this.preco
    }
}