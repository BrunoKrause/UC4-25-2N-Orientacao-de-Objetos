import { serviceModel, Servico } from "../model";

export class devSiteInst implements Servico {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Criação de um site completo para empresas, com páginas como Home, Sobre e Contato.'
    }

    getPreco(): number {
        return this.preco
    }
}