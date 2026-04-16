import { serviceModel } from "../model";

export class designSocialMedia implements serviceModel {
    preco: number
    
    constructor(preco:number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Criação de posts para Instagram, Facebook, etc.'
    }
    getPreco(): number {
        return this.preco
    }
}