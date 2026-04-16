import { serviceModel } from "../model";

export class flyer implements serviceModel {
    preco: number
    
    constructor(preco:number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Arte para divulgação de eventos ou produtos.'
    }
    getPreco(): number {
        return this.preco
    }
}