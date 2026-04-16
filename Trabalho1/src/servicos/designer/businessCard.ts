import { serviceModel } from "../model";

export class businessCard implements serviceModel {
    preco: number
    
    constructor(preco:number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Design de cartão para empresas ou profissionais.'
    }
    getPreco(): number {
        return this.preco
    }
}