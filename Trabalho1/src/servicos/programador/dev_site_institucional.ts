import { serviceModel } from "../model";

export class devSiteInst implements serviceModel {
    preco: number;

    constructor(preco: number){
        this.preco = preco
    }
    getDescricao(): string {
        return 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
    }

    getPreco(): number {
        return this.preco
    }
}