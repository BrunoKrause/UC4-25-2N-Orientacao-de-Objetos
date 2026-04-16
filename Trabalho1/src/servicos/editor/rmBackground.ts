import { serviceModel } from "../model";

export class rmBackground implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Recorte e melhoria geral da imagem.'
    }
    getPreco(): number {
        return this.preco
    }
}