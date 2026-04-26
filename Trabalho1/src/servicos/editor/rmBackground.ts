import { serviceModel, Servico } from "../model";

export class rmBackground implements Servico {
    nome: string;
    preco: number

   constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Recorte e melhoria geral da imagem.'
    }
    getPreco(): number {
        return this.preco
    }
}