import { serviceModel } from "../model";

export class integrateAPI implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Conectar o sistema a serviços externos (pagamentos, login social, etc.).'
    }
    getPreco(): number {
        return this.preco
    }
}