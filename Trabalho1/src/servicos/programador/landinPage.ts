import { serviceModel } from "../model";

export class landingPage implements serviceModel {
    preco: number

    constructor(preco: number){
        this.preco = preco
    }
    getDescricao(): string {
        return 'Página única focada em conversão (vendas, captura de leads, etc.).'
    }
    getPreco(): number {
        return this.preco
    }
}