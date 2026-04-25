import { serviceModel } from "../model";

export class landingPage implements serviceModel {
    nome: string
    preco: number

    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return 'Página única focada em conversão (vendas, captura de leads, etc.).'
    }
    getPreco(): number {
        return this.preco
    }
}