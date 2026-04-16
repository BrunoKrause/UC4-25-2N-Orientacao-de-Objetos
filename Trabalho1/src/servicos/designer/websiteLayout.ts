import { serviceModel } from "../model";

export class websiteLayout implements serviceModel {
    preco: number
    
    constructor(preco:number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Criação do visual de um site (sem programação).'
    }
    getPreco(): number {
        return this.preco
    }
}