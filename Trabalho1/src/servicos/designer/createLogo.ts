import { serviceModel } from "../model";

export class createLogo implements serviceModel {
    preco: number
    
    constructor(preco:number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Criação da marca visual de uma empresa (nome + símbolo).'
    }
    getPreco(): number {
        return this.preco
    }
}