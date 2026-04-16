import { serviceModel } from "../model";

export class thumbnail implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Design de capa chamativa para redes sociais.'
    }
    getPreco(): number {
        return this.preco
    }
}