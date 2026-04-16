import { serviceModel } from "../model";

export class editVideos implements serviceModel {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Cortes, organização e elementos visuais.'
    }
    getPreco(): number {
        return this.preco
    }
}