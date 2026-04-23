import { lanche } from "./lanche";

export class Pastel implements lanche {
    getDescricao(): string {
        return "Pastel de Carne"
    }

    getPreco(): number {
        return 10
    }
}