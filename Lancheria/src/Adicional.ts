import { lanche } from "./lanche";

export abstract class Adicional implements lanche {

    constructor(protected Lanche: lanche) {}

    getDescricao(): string {
        return this.Lanche.getDescricao()
    }
    getPreco(): number {
        return this.Lanche.getPreco()
    }
}